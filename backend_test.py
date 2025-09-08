#!/usr/bin/env python3
"""
Portfolio Backend API Test Suite
Tests all backend functionality including contact forms, analytics, and database integration.
"""

import requests
import json
import time
from datetime import datetime
import sys
import os

# Get the backend URL from environment
BACKEND_URL = "https://skill-spotlight-31.preview.emergentagent.com/api"

class PortfolioAPITester:
    def __init__(self):
        self.base_url = BACKEND_URL
        self.session = requests.Session()
        self.test_results = []
        
    def log_test(self, test_name, success, message, details=None):
        """Log test results"""
        result = {
            'test': test_name,
            'success': success,
            'message': message,
            'timestamp': datetime.now().isoformat(),
            'details': details
        }
        self.test_results.append(result)
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status}: {test_name} - {message}")
        if details and not success:
            print(f"   Details: {details}")
    
    def test_api_health_check(self):
        """Test GET /api/ endpoint for API health and information"""
        try:
            response = self.session.get(f"{self.base_url}/")
            
            if response.status_code == 200:
                data = response.json()
                expected_fields = ['message', 'version', 'endpoints']
                
                if all(field in data for field in expected_fields):
                    expected_endpoints = ['/api/contact', '/api/contact/messages', '/api/analytics/page-view']
                    if all(endpoint in data['endpoints'] for endpoint in expected_endpoints):
                        self.log_test("API Health Check", True, "API is running and returns proper information")
                        return True
                    else:
                        self.log_test("API Health Check", False, "Missing expected endpoints in response", data)
                else:
                    self.log_test("API Health Check", False, "Missing expected fields in response", data)
            else:
                self.log_test("API Health Check", False, f"HTTP {response.status_code}", response.text)
                
        except Exception as e:
            self.log_test("API Health Check", False, f"Connection error: {str(e)}")
        
        return False
    
    def test_contact_form_valid_submission(self):
        """Test POST /api/contact with valid data"""
        try:
            valid_data = {
                "name": "John Smith",
                "email": "john.smith@techcorp.com",
                "company": "TechCorp Solutions",
                "subject": "Interested in collaboration opportunities",
                "message": "Hello Srinivasan, I came across your portfolio and I'm impressed with your work in full-stack development. We have some exciting projects that might align with your expertise. Would you be interested in discussing potential collaboration opportunities?"
            }
            
            response = self.session.post(f"{self.base_url}/contact", json=valid_data)
            
            if response.status_code == 200:
                data = response.json()
                expected_fields = ['success', 'message', 'id']
                
                if all(field in data for field in expected_fields) and data['success']:
                    self.log_test("Contact Form Valid Submission", True, "Successfully submitted contact form")
                    return data['id']  # Return ID for later verification
                else:
                    self.log_test("Contact Form Valid Submission", False, "Invalid response structure", data)
            else:
                self.log_test("Contact Form Valid Submission", False, f"HTTP {response.status_code}", response.text)
                
        except Exception as e:
            self.log_test("Contact Form Valid Submission", False, f"Request error: {str(e)}")
        
        return None
    
    def test_contact_form_invalid_data(self):
        """Test POST /api/contact with various invalid data scenarios"""
        test_cases = [
            {
                "name": "Missing Required Fields",
                "data": {"name": "John", "email": "john@example.com"},
                "expected_status": 422
            },
            {
                "name": "Invalid Email Format", 
                "data": {
                    "name": "John Smith",
                    "email": "invalid-email",
                    "subject": "Test subject here",
                    "message": "This is a test message with sufficient length"
                },
                "expected_status": 422
            },
            {
                "name": "Name Too Short",
                "data": {
                    "name": "J",
                    "email": "john@example.com", 
                    "subject": "Test subject here",
                    "message": "This is a test message with sufficient length"
                },
                "expected_status": 422
            },
            {
                "name": "Subject Too Short",
                "data": {
                    "name": "John Smith",
                    "email": "john@example.com",
                    "subject": "Hi",
                    "message": "This is a test message with sufficient length"
                },
                "expected_status": 422
            },
            {
                "name": "Message Too Short",
                "data": {
                    "name": "John Smith", 
                    "email": "john@example.com",
                    "subject": "Test subject here",
                    "message": "Short"
                },
                "expected_status": 422
            },
            {
                "name": "Spam Content Detection",
                "data": {
                    "name": "John Smith",
                    "email": "john@example.com", 
                    "subject": "Check out this website http://spam.com",
                    "message": "This message contains a URL which should be filtered"
                },
                "expected_status": 422
            }
        ]
        
        passed_tests = 0
        for test_case in test_cases:
            try:
                response = self.session.post(f"{self.base_url}/contact", json=test_case["data"])
                
                if response.status_code == test_case["expected_status"]:
                    self.log_test(f"Invalid Data - {test_case['name']}", True, f"Correctly rejected with status {response.status_code}")
                    passed_tests += 1
                else:
                    self.log_test(f"Invalid Data - {test_case['name']}", False, f"Expected {test_case['expected_status']}, got {response.status_code}", response.text)
                    
            except Exception as e:
                self.log_test(f"Invalid Data - {test_case['name']}", False, f"Request error: {str(e)}")
        
        return passed_tests == len(test_cases)
    
    def test_rate_limiting(self):
        """Test rate limiting functionality (5 requests per hour)"""
        try:
            # Submit 6 contact forms rapidly to test rate limiting
            valid_data = {
                "name": "Rate Test User",
                "email": "ratetest@example.com",
                "subject": "Rate limiting test submission",
                "message": "This is a test message to check rate limiting functionality."
            }
            
            successful_submissions = 0
            rate_limited = False
            
            for i in range(6):
                # Modify email slightly to avoid duplicate detection
                test_data = valid_data.copy()
                test_data["email"] = f"ratetest{i}@example.com"
                
                response = self.session.post(f"{self.base_url}/contact", json=test_data)
                
                if response.status_code == 200:
                    successful_submissions += 1
                elif response.status_code == 429:
                    rate_limited = True
                    break
                
                time.sleep(0.1)  # Small delay between requests
            
            if rate_limited and successful_submissions >= 5:
                self.log_test("Rate Limiting", True, f"Rate limiting working: {successful_submissions} successful, then blocked")
                return True
            elif successful_submissions == 6:
                self.log_test("Rate Limiting", False, "Rate limiting not working - all 6 requests succeeded")
            else:
                self.log_test("Rate Limiting", False, f"Unexpected behavior: {successful_submissions} successful submissions")
                
        except Exception as e:
            self.log_test("Rate Limiting", False, f"Test error: {str(e)}")
        
        return False
    
    def test_contact_messages_retrieval(self):
        """Test GET /api/contact/messages endpoint"""
        try:
            # Test basic retrieval
            response = self.session.get(f"{self.base_url}/contact/messages")
            
            if response.status_code == 200:
                data = response.json()
                expected_fields = ['messages', 'total']
                
                if all(field in data for field in expected_fields):
                    # Test pagination
                    response_paginated = self.session.get(f"{self.base_url}/contact/messages?skip=0&limit=2")
                    
                    if response_paginated.status_code == 200:
                        paginated_data = response_paginated.json()
                        
                        if len(paginated_data['messages']) <= 2:
                            self.log_test("Contact Messages Retrieval", True, f"Successfully retrieved {data['total']} total messages with pagination")
                            return True
                        else:
                            self.log_test("Contact Messages Retrieval", False, "Pagination not working correctly")
                    else:
                        self.log_test("Contact Messages Retrieval", False, f"Pagination test failed: HTTP {response_paginated.status_code}")
                else:
                    self.log_test("Contact Messages Retrieval", False, "Missing expected fields in response", data)
            else:
                self.log_test("Contact Messages Retrieval", False, f"HTTP {response.status_code}", response.text)
                
        except Exception as e:
            self.log_test("Contact Messages Retrieval", False, f"Request error: {str(e)}")
        
        return False
    
    def test_analytics_tracking(self):
        """Test POST /api/analytics/page-view endpoint"""
        try:
            analytics_data = {
                "page": "/portfolio",
                "section": "projects"
            }
            
            response = self.session.post(f"{self.base_url}/analytics/page-view", json=analytics_data)
            
            if response.status_code == 200:
                data = response.json()
                
                if data.get('success') is True:
                    # Test without section parameter
                    analytics_data_minimal = {"page": "/about"}
                    response2 = self.session.post(f"{self.base_url}/analytics/page-view", json=analytics_data_minimal)
                    
                    if response2.status_code == 200 and response2.json().get('success'):
                        self.log_test("Analytics Tracking", True, "Successfully tracked page views")
                        return True
                    else:
                        self.log_test("Analytics Tracking", False, "Failed to track minimal page view data")
                else:
                    self.log_test("Analytics Tracking", False, "Analytics tracking returned success=false", data)
            else:
                self.log_test("Analytics Tracking", False, f"HTTP {response.status_code}", response.text)
                
        except Exception as e:
            self.log_test("Analytics Tracking", False, f"Request error: {str(e)}")
        
        return False
    
    def test_error_handling(self):
        """Test various error scenarios"""
        try:
            # Test invalid JSON
            response = self.session.post(
                f"{self.base_url}/contact", 
                data="invalid json",
                headers={'Content-Type': 'application/json'}
            )
            
            if response.status_code in [400, 422]:
                # Test non-existent endpoint
                response2 = self.session.get(f"{self.base_url}/nonexistent")
                
                if response2.status_code == 404:
                    self.log_test("Error Handling", True, "Proper error responses for invalid requests")
                    return True
                else:
                    self.log_test("Error Handling", False, f"Non-existent endpoint returned {response2.status_code} instead of 404")
            else:
                self.log_test("Error Handling", False, f"Invalid JSON returned {response.status_code} instead of 400/422")
                
        except Exception as e:
            self.log_test("Error Handling", False, f"Test error: {str(e)}")
        
        return False
    
    def run_all_tests(self):
        """Run all backend API tests"""
        print(f"🚀 Starting Portfolio Backend API Tests")
        print(f"📡 Testing API at: {self.base_url}")
        print("=" * 60)
        
        # Run tests in logical order
        tests = [
            self.test_api_health_check,
            self.test_contact_form_valid_submission,
            self.test_contact_form_invalid_data,
            self.test_rate_limiting,
            self.test_contact_messages_retrieval,
            self.test_analytics_tracking,
            self.test_error_handling
        ]
        
        passed = 0
        total = len(tests)
        
        for test in tests:
            try:
                if test():
                    passed += 1
            except Exception as e:
                print(f"❌ Test {test.__name__} crashed: {str(e)}")
        
        print("=" * 60)
        print(f"📊 Test Results: {passed}/{total} tests passed")
        
        if passed == total:
            print("🎉 All tests passed! Backend API is working correctly.")
        else:
            print("⚠️  Some tests failed. Check the details above.")
        
        return passed, total, self.test_results

def main():
    """Main test execution"""
    tester = PortfolioAPITester()
    passed, total, results = tester.run_all_tests()
    
    # Print detailed results
    print("\n" + "=" * 60)
    print("📋 DETAILED TEST RESULTS")
    print("=" * 60)
    
    for result in results:
        status = "✅" if result['success'] else "❌"
        print(f"{status} {result['test']}: {result['message']}")
        if result['details'] and not result['success']:
            print(f"   📝 Details: {result['details']}")
    
    return 0 if passed == total else 1

if __name__ == "__main__":
    sys.exit(main())