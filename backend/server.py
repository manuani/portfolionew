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

# Include the router in the main app
app.include_router(api_router)

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

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
