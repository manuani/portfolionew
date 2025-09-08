from fastapi import FastAPI, APIRouter, HTTPException, Request
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, validator
from typing import List, Optional
import uuid
from datetime import datetime
import re


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="Portfolio API", description="Backend API for Srinivasan Muralidharan's Portfolio")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Contact Form Models
class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    company: Optional[str] = Field(None, max_length=100)
    subject: str = Field(..., min_length=5, max_length=200)
    message: str = Field(..., min_length=10, max_length=2000)
    status: str = Field(default="new")
    ip_address: Optional[str] = None
    user_agent: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    @validator('name')
    def validate_name(cls, v):
        if not re.match(r'^[a-zA-Z\s\-\'\.]+$', v):
            raise ValueError('Name can only contain letters, spaces, hyphens, apostrophes, and periods')
        return v.strip()

    @validator('subject', 'message')
    def validate_text_fields(cls, v):
        # Basic spam/malicious content filtering
        spam_patterns = [
            r'http[s]?://',  # URLs
            r'www\.',        # Web addresses
            r'<script',      # Script tags
            r'javascript:',  # JavaScript
            r'\bsex\b',      # Adult content
            r'\bporn\b',     # Adult content
        ]
        
        for pattern in spam_patterns:
            if re.search(pattern, v.lower()):
                raise ValueError('Content contains prohibited elements')
        
        return v.strip()

class ContactMessageCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    company: Optional[str] = Field(None, max_length=100)
    subject: str = Field(..., min_length=5, max_length=200)
    message: str = Field(..., min_length=10, max_length=2000)

    @validator('name')
    def validate_name(cls, v):
        if not re.match(r'^[a-zA-Z\s\-\'\.]+$', v):
            raise ValueError('Name can only contain letters, spaces, hyphens, apostrophes, and periods')
        return v.strip()

    @validator('subject', 'message')
    def validate_text_fields(cls, v):
        # Basic spam/malicious content filtering
        spam_patterns = [
            r'http[s]?://',  # URLs
            r'www\.',        # Web addresses
            r'<script',      # Script tags
            r'javascript:',  # JavaScript
        ]
        
        for pattern in spam_patterns:
            if re.search(pattern, v.lower()):
                raise ValueError('Content contains prohibited elements')
        
        return v.strip()

class ContactMessageResponse(BaseModel):
    success: bool
    message: str
    id: str

class ContactMessagesResponse(BaseModel):
    messages: List[ContactMessage]
    total: int

# Page Analytics Models
class PageViewCreate(BaseModel):
    page: str
    section: Optional[str] = None

class PageView(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    page: str
    section: Optional[str] = None
    ip_address: Optional[str] = None
    user_agent: Optional[str] = None
    timestamp: datetime = Field(default_factory=datetime.utcnow)

# Legacy Status Check Models (keeping for compatibility)
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# Router will be included after routes are defined

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Utility function to get client IP
def get_client_ip(request: Request) -> str:
    x_forwarded_for = request.headers.get('x-forwarded-for')
    if x_forwarded_for:
        return x_forwarded_for.split(',')[0].strip()
    return request.client.host if request.client else "unknown"

# Rate limiting storage (in production, use Redis)
rate_limit_storage = {}

def check_rate_limit(ip_address: str, limit: int = 5, window: int = 3600) -> bool:
    """Simple rate limiting: max 5 submissions per hour per IP"""
    current_time = datetime.utcnow().timestamp()
    
    if ip_address not in rate_limit_storage:
        rate_limit_storage[ip_address] = []
    
    # Remove old timestamps outside the window
    rate_limit_storage[ip_address] = [
        timestamp for timestamp in rate_limit_storage[ip_address] 
        if current_time - timestamp < window
    ]
    
    if len(rate_limit_storage[ip_address]) >= limit:
        return False
    
    rate_limit_storage[ip_address].append(current_time)
    return True

# API Routes
@api_router.get("/")
async def root():
    return {
        "message": "Portfolio API is running", 
        "version": "1.0.0",
        "endpoints": [
            "/api/contact",
            "/api/contact/messages", 
            "/api/analytics/page-view"
        ]
    }

@api_router.post("/contact", response_model=ContactMessageResponse)
async def submit_contact_form(contact_data: ContactMessageCreate, request: Request):
    """Submit a contact form message"""
    try:
        # Get client information
        client_ip = get_client_ip(request)
        user_agent = request.headers.get('user-agent', 'unknown')
        
        # Rate limiting
        if not check_rate_limit(client_ip):
            raise HTTPException(
                status_code=429, 
                detail="Too many contact form submissions. Please try again later."
            )
        
        # Create contact message
        contact_message = ContactMessage(
            **contact_data.dict(),
            ip_address=client_ip,
            user_agent=user_agent
        )
        
        # Save to database
        result = await db.contact_messages.insert_one(contact_message.dict())
        
        if result.inserted_id:
            logger.info(f"Contact form submitted by {contact_data.email} from {client_ip}")
            return ContactMessageResponse(
                success=True,
                message="Thank you for your message! I'll get back to you within 24 hours.",
                id=contact_message.id
            )
        else:
            raise HTTPException(status_code=500, detail="Failed to save contact message")
            
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        logger.error(f"Error submitting contact form: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/contact/messages", response_model=ContactMessagesResponse)
async def get_contact_messages(skip: int = 0, limit: int = 50):
    """Get all contact messages (admin endpoint)"""
    try:
        # Get total count
        total = await db.contact_messages.count_documents({})
        
        # Get messages with pagination
        messages_cursor = db.contact_messages.find({}).sort("created_at", -1).skip(skip).limit(limit)
        messages = await messages_cursor.to_list(length=limit)
        
        # Convert to response model
        contact_messages = [ContactMessage(**msg) for msg in messages]
        
        return ContactMessagesResponse(messages=contact_messages, total=total)
        
    except Exception as e:
        logger.error(f"Error fetching contact messages: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.post("/analytics/page-view")
async def track_page_view(page_view_data: PageViewCreate, request: Request):
    """Track page views for analytics"""
    try:
        client_ip = get_client_ip(request)
        user_agent = request.headers.get('user-agent', 'unknown')
        
        page_view = PageView(
            **page_view_data.dict(),
            ip_address=client_ip,
            user_agent=user_agent
        )
        
        await db.page_views.insert_one(page_view.dict())
        
        return {"success": True, "message": "Page view tracked"}
        
    except Exception as e:
        logger.error(f"Error tracking page view: {str(e)}")
        return {"success": False, "message": "Failed to track page view"}

# Legacy endpoints (keeping for compatibility)
@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

# Include the router in the main app AFTER all routes are defined
app.include_router(api_router)
