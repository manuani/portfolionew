# Portfolio Backend API Contracts

## Overview
This document outlines the API contracts for the Srinivasan Muralidharan portfolio backend integration.

## Current Mock Data (frontend/src/data/mock.js)
- Portfolio personal information
- Professional experience data
- Skills and projects data
- Contact information

## Backend Implementation Requirements

### 1. Contact Form Submission
**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "company": "string (optional)",
  "subject": "string (required)",
  "message": "string (required, min 10 characters)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact message sent successfully",
  "id": "contact_message_id"
}
```

**Validation Rules:**
- Name: Required, 2-100 characters
- Email: Required, valid email format
- Company: Optional, max 100 characters  
- Subject: Required, 5-200 characters
- Message: Required, 10-2000 characters

### 2. Get Contact Messages (Admin)
**Endpoint:** `GET /api/contact/messages`

**Response:**
```json
{
  "messages": [
    {
      "id": "string",
      "name": "string",
      "email": "string", 
      "company": "string",
      "subject": "string",
      "message": "string",
      "createdAt": "ISO date string",
      "status": "new|read|replied"
    }
  ],
  "total": "number"
}
```

### 3. Portfolio Analytics (Optional)
**Endpoint:** `POST /api/analytics/page-view`

**Request Body:**
```json
{
  "page": "string",
  "section": "string (optional)",
  "userAgent": "string",
  "timestamp": "ISO date string"
}
```

## Database Models

### ContactMessage Model
```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required),
  company: String (optional),
  subject: String (required), 
  message: String (required),
  status: String (enum: ['new', 'read', 'replied'], default: 'new'),
  ipAddress: String,
  userAgent: String,
  createdAt: Date (default: Date.now),
  updatedAt: Date
}
```

### PageView Model (Optional)
```javascript
{
  _id: ObjectId,
  page: String (required),
  section: String,
  userAgent: String,
  ipAddress: String, 
  timestamp: Date (default: Date.now)
}
```

## Frontend Integration Changes

### Contact Form (Contact.jsx)
- Replace mock form submission with actual API call
- Add proper error handling and loading states
- Show success/error messages using toast notifications
- Add client-side validation before API call

### Error Handling
- Network errors: Show user-friendly message
- Validation errors: Display field-specific errors
- Success: Clear form and show confirmation

## Email Notifications (Future Enhancement)
- Send notification email to portfolio owner when new message received
- Auto-reply email to sender confirming message receipt
- Integration with SendGrid or similar service

## Security Considerations
- Rate limiting on contact form (max 5 submissions per hour per IP)
- Input sanitization and validation
- CORS configuration for frontend domain
- Basic spam protection (honeypot field, basic content filtering)

## Testing Requirements
- Test contact form submission with valid data
- Test validation errors for invalid inputs
- Test network error scenarios
- Test form reset after successful submission
- Test responsive behavior on mobile devices