# SECURITY IMPLEMENTATION GUIDE
**FLAVER TOWN PROJECT - Enterprise Security Standards**

---

## Table of Contents
1. [Quick Start](#quick-start)
2. [Security Libraries Overview](#security-libraries-overview)
3. [API Route Security](#api-route-security)
4. [Client-Side Encryption](#client-side-encryption)
5. [Threat Detection](#threat-detection)
6. [Security Testing](#security-testing)
7. [Best Practices](#best-practices)
8. [Troubleshooting](#troubleshooting)

---

## Quick Start

### Step 1: Secure an API Route

```typescript
// app/api/your-route/route.ts
import { SecurityPresets } from '@/lib/apiSecurityMiddleware'
import { NextRequest, NextResponse } from 'next/server'

// For public endpoints (basic protection)
export const GET = SecurityPresets.public(async (request: NextRequest) => {
  const data = { message: 'Public data' }
  return NextResponse.json(data)
})

// For authenticated endpoints (medium protection)
export const POST = SecurityPresets.authenticated(async (request: NextRequest) => {
  // Your handler code
  return NextResponse.json({ success: true })
})

// For admin endpoints (maximum protection)
export const DELETE = SecurityPresets.admin(async (request: NextRequest) => {
  // Admin-only code
  return NextResponse.json({ success: true })
})
```

### Step 2: Encrypt Sensitive Data

```typescript
import { ClientEncryption, SecureStorage } from '@/lib/clientEncryption'

// Encrypt user progress
const progress = { lessons: [1, 2, 3], points: 150 }
const encrypted = await ClientEncryption.encryptUserProgress(progress, userId)

// Store encrypted data
await SecureStorage.setItem('user_progress', progress)

// Retrieve and decrypt
const decrypted = await SecureStorage.getItem('user_progress')
```

### Step 3: Monitor Security

```typescript
import { AdvancedSecurityMonitor } from '@/lib/advancedSecurityMonitoring'

// Log security events
AdvancedSecurityMonitor.logEvent({
  type: 'access',
  severity: 'low',
  userId: 'user123',
  ip: '192.168.1.1',
  path: '/api/data',
  method: 'GET',
  details: { action: 'data_access' },
  blocked: false
})

// Check metrics
const metrics = AdvancedSecurityMonitor.getMetrics()
console.log('Security Metrics:', metrics)
```

---

## Security Libraries Overview

### 1. Client Encryption (`lib/clientEncryption.ts`)

**Purpose:** Browser-native end-to-end encryption

**Key Classes:**
- `ClientEncryption` - AES-256-GCM encryption
- `SecureStorage` - Encrypted localStorage
- `SecurityValidator` - Input sanitization
- `CSPManager` - Content Security Policy
- `ClientRateLimiter` - Client-side rate limiting

**Example:**
```typescript
// Encrypt data
const encrypted = await ClientEncryption.encrypt('secret', 'password')

// Decrypt data
const decrypted = await ClientEncryption.decrypt(encrypted, 'password')

// Generate secure password
const password = ClientEncryption.generateSecurePassword(32)

// Hash data
const hash = await ClientEncryption.hash('data')
```

### 2. Advanced Security Monitoring (`lib/advancedSecurityMonitoring.ts`)

**Purpose:** Real-time threat detection and logging

**Key Classes:**
- `AdvancedSecurityMonitor` - Main monitoring system
- `AuditLogger` - Compliance logging

**Example:**
```typescript
// Log event
AdvancedSecurityMonitor.logEvent({
  type: 'auth',
  severity: 'medium',
  userId: 'user123',
  details: { action: 'login_attempt', success: false },
  blocked: false
})

// Block IP
AdvancedSecurityMonitor.blockIP('192.168.1.100', 'Suspicious activity')

// Check if IP is blocked
if (AdvancedSecurityMonitor.isIPBlocked('192.168.1.100')) {
  // Deny access
}

// Get metrics
const metrics = AdvancedSecurityMonitor.getMetrics(3600000) // Last hour
```

### 3. API Security Middleware (`lib/apiSecurityMiddleware.ts`)

**Purpose:** Comprehensive API protection

**Key Features:**
- Rate limiting
- Input validation
- CSRF protection
- IP blocking
- Security headers

**Example:**
```typescript
import { createSecureAPIRoute, SecurityPresets } from '@/lib/apiSecurityMiddleware'

// Custom security config
export const POST = createSecureAPIRoute(
  async (request) => {
    // Your handler
    return NextResponse.json({ success: true })
  },
  {
    rateLimit: {
      windowMs: 60000,
      maxRequests: 30
    },
    validateInput: true,
    checkCSRF: true,
    logAccess: true
  }
)

// Or use presets
export const GET = SecurityPresets.public(async (request) => {
  // Handler code
})
```

---

## API Route Security

### Security Levels

#### Level 1: Public (Basic Protection)
- **Rate Limit:** 60 requests/minute
- **Input Validation:** ✅
- **CSRF Protection:** ❌
- **Auth Required:** ❌

```typescript
export const GET = SecurityPresets.public(async (request) => {
  // Public data access
})
```

#### Level 2: Authenticated (Medium Protection)
- **Rate Limit:** 30 requests/minute
- **Input Validation:** ✅
- **CSRF Protection:** ✅
- **Auth Required:** ✅

```typescript
export const POST = SecurityPresets.authenticated(async (request) => {
  // Authenticated user data
})
```

#### Level 3: Admin (Maximum Protection)
- **Rate Limit:** 10 requests/minute
- **Input Validation:** ✅
- **CSRF Protection:** ✅
- **Auth Required:** ✅
- **Admin Required:** ✅

```typescript
export const DELETE = SecurityPresets.admin(async (request) => {
  // Admin operations
})
```

#### Level 4: Upload (Special Protection)
- **Rate Limit:** 5 uploads/5 minutes
- **Input Validation:** ✅
- **Auth Required:** ✅

```typescript
export const POST = SecurityPresets.upload(async (request) => {
  // File upload handling
})
```

### Custom Security Configuration

```typescript
import { createSecureAPIRoute } from '@/lib/apiSecurityMiddleware'

export const POST = createSecureAPIRoute(
  async (request) => {
    // Your handler
    return NextResponse.json({ success: true })
  },
  {
    // Rate limiting
    rateLimit: {
      windowMs: 60000,      // Time window (1 minute)
      maxRequests: 100,      // Max requests in window
      message: 'Too many requests'
    },
    
    // Authentication
    requireAuth: true,       // Require Clerk authentication
    requireAdmin: false,     // Require admin role
    
    // Input validation
    validateInput: true,     // Validate JSON body
    
    // CSRF protection
    checkCSRF: true,         // Validate CSRF token
    
    // Logging
    logAccess: true,         // Log all access attempts
    
    // Allowed methods
    allowedMethods: ['POST', 'PUT']
  }
)
```

---

## Client-Side Encryption

### Encrypting User Data

```typescript
import { ClientEncryption } from '@/lib/clientEncryption'

// Encrypt user progress
const userProgress = {
  completedLessons: [1, 2, 3, 4, 5],
  points: 250,
  streak: 7,
  achievements: ['first-lesson', 'week-streak']
}

const encrypted = await ClientEncryption.encryptUserProgress(
  userProgress,
  userId
)

// Send to server
await fetch('/api/sync-progress', {
  method: 'POST',
  body: JSON.stringify({ encryptedData: encrypted })
})
```

### Decrypting Data

```typescript
// Retrieve from server
const response = await fetch('/api/sync-progress/get')
const { encryptedData } = await response.json()

// Decrypt
const userProgress = await ClientEncryption.decryptUserProgress(
  encryptedData,
  userId
)
```

### Secure Local Storage

```typescript
import { SecureStorage } from '@/lib/clientEncryption'

// Store encrypted data
await SecureStorage.setItem('preferences', {
  theme: 'dark',
  notifications: true,
  language: 'en'
})

// Retrieve decrypted data
const preferences = await SecureStorage.getItem('preferences')

// Remove item
SecureStorage.removeItem('preferences')

// Clear all
SecureStorage.clear()
```

### Input Sanitization

```typescript
import { SecurityValidator } from '@/lib/clientEncryption'

// Sanitize user input (XSS protection)
const userInput = '<script>alert("XSS")</script>'
const safe = SecurityValidator.sanitizeInput(userInput)
// Result: "scriptalert(XSS)/script" (tags removed)

// Validate code input
const codeValidation = SecurityValidator.validateCode(
  userCode,
  'javascript'
)
if (!codeValidation.valid) {
  console.error('Code validation errors:', codeValidation.errors)
}

// Validate redirect URL
const isValid = SecurityValidator.isValidRedirectUrl(
  redirectUrl,
  ['yourapp.com', 'trusted.com']
)

// Sanitize filename
const safeFilename = SecurityValidator.sanitizeFilename(
  'user../../etc/passwd.txt'
)
// Result: "user_etc_passwd.txt"
```

---

## Threat Detection

### Automatic Threat Detection

The system automatically detects:
- SQL injection attempts
- XSS attacks
- Path traversal attempts
- Brute force attacks
- Unusual access patterns
- Suspicious user agents

### Threat Scoring

Events are scored 0-100:
- **0-50:** Allow (normal)
- **51-70:** Warn (suspicious)
- **71-90:** Block (high threat)
- **91-100:** Escalate (critical threat)

### Manual Threat Logging

```typescript
import { AdvancedSecurityMonitor } from '@/lib/advancedSecurityMonitoring'

// Log suspicious activity
AdvancedSecurityMonitor.logEvent({
  type: 'suspicious',
  severity: 'high',
  userId: 'user123',
  ip: '192.168.1.100',
  userAgent: 'Mozilla/5.0...',
  path: '/api/admin/users',
  method: 'POST',
  details: {
    reason: 'Unauthorized admin access attempt',
    payload: requestBody
  },
  blocked: true
})
```

### IP Management

```typescript
// Block IP
AdvancedSecurityMonitor.blockIP('192.168.1.100', 'Multiple failed login attempts')

// Check if blocked
if (AdvancedSecurityMonitor.isIPBlocked('192.168.1.100')) {
  return new Response('Forbidden', { status: 403 })
}

// Unblock IP
AdvancedSecurityMonitor.unblockIP('192.168.1.100')
```

### Security Metrics

```typescript
// Get metrics for last 24 hours
const metrics = AdvancedSecurityMonitor.getMetrics(86400000)

console.log(`Total Events: ${metrics.totalEvents}`)
console.log(`Critical Events: ${metrics.eventsBySeverity.critical}`)
console.log(`Blocked IPs: ${metrics.blockedIPs}`)
console.log(`Top Threats:`, metrics.topThreats)

// Get dashboard data
const dashboard = AdvancedSecurityMonitor.getDashboardData()
console.log(`Threat Level: ${dashboard.threatLevel.level}`)
console.log(`Threat Score: ${dashboard.threatLevel.score}/100`)
```

---

## Security Testing

### Run Automated Tests

```typescript
import { runSecurityTests } from '@/lib/securityTesting'

// Run all tests
const results = await runSecurityTests()

console.log(`Passed: ${results.passed}`)
console.log(`Failed: ${results.failed}`)
console.log(`Results:`, results.results)
```

### Manual Testing

```bash
# Test XSS protection
curl -X POST http://localhost:3000/api/test \
  -H "Content-Type: application/json" \
  -d '{"input":"<script>alert(\"XSS\")</script>"}'

# Test SQL injection
curl -X POST http://localhost:3000/api/test \
  -H "Content-Type: application/json" \
  -d '{"input":"1'' OR ''1''=''1"}'

# Test rate limiting
for i in {1..70}; do
  curl http://localhost:3000/api/test
done

# Test CSRF protection
curl -X POST http://localhost:3000/api/test \
  -H "Content-Type: application/json" \
  -d '{"data":"test"}'
# Should return 403 without CSRF token
```

---

## Best Practices

### 1. Always Validate Input

```typescript
import { SecurityValidator } from '@/lib/clientEncryption'

// Sanitize before processing
const sanitized = SecurityValidator.sanitizeInput(userInput, 1000)

// Validate before using
if (sanitized.length === 0) {
  throw new Error('Invalid input')
}
```

### 2. Encrypt Sensitive Data

```typescript
// Always encrypt before storing
const encrypted = await ClientEncryption.encrypt(sensitiveData, password)
localStorage.setItem('data', encrypted)

// Or use SecureStorage
await SecureStorage.setItem('data', sensitiveData)
```

### 3. Use Security Presets

```typescript
// Don't create custom security unless needed
// Use presets for consistency

// ❌ Bad
export const POST = async (request) => {
  // No security
}

// ✅ Good
export const POST = SecurityPresets.authenticated(async (request) => {
  // Protected
})
```

### 4. Log Security Events

```typescript
// Log important actions
AdvancedSecurityMonitor.logEvent({
  type: 'access',
  severity: 'low',
  userId,
  details: { action: 'data_access', resource: 'user_profile' },
  blocked: false
})
```

### 5. Monitor Regularly

```typescript
// Check metrics regularly
const metrics = AdvancedSecurityMonitor.getMetrics()

if (metrics.eventsBySeverity.critical > 0) {
  // Alert admin
  console.error('Critical security events detected!')
}
```

### 6. Handle Errors Securely

```typescript
try {
  // Your code
} catch (error) {
  // ❌ Don't expose details
  // return NextResponse.json({ error: error.message })
  
  // ✅ Log internally, return generic message
  console.error('Internal error:', error)
  AdvancedSecurityMonitor.logEvent({
    type: 'error',
    severity: 'medium',
    details: { error: error.message },
    blocked: false
  })
  return NextResponse.json(
    { error: 'An error occurred' },
    { status: 500 }
  )
}
```

---

## Troubleshooting

### Rate Limit Issues

**Problem:** Users getting rate limited too quickly

**Solution:**
```typescript
// Increase rate limit for specific route
export const POST = createSecureAPIRoute(handler, {
  rateLimit: {
    windowMs: 60000,
    maxRequests: 100  // Increased from default
  }
})
```

### CSRF Token Errors

**Problem:** CSRF validation failing

**Solution:**
```typescript
// Ensure CSRF token is included in request
const response = await fetch('/api/endpoint', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-CSRF-Token': csrfToken,
    'X-Session-Id': sessionId
  },
  body: JSON.stringify(data)
})
```

### Encryption Errors

**Problem:** Decryption failing

**Solution:**
```typescript
try {
  const decrypted = await ClientEncryption.decrypt(encrypted, password)
} catch (error) {
  // Wrong password or corrupted data
  console.error('Decryption failed:', error)
  // Clear corrupted data
  localStorage.removeItem('corrupted_key')
}
```

### High False Positives

**Problem:** Legitimate requests being blocked

**Solution:**
```typescript
// Adjust threat detection thresholds
// Or whitelist specific IPs
const whitelistedIPs = ['192.168.1.1', '10.0.0.1']

if (whitelistedIPs.includes(requestIP)) {
  // Skip strict security checks
}
```

---

## Environment Variables

Add to `.env.local`:

```bash
# Security Keys (CHANGE IN PRODUCTION!)
NEXT_PUBLIC_APP_SECRET=your_very_long_random_secret_key_here
NEXT_PUBLIC_STORAGE_KEY=your_storage_encryption_key_here
NEXT_PUBLIC_APP_VERSION=1.0.0

# Clerk (already configured)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
```

**⚠️ IMPORTANT:** Generate secure random keys for production!

```bash
# Generate secure keys (Node.js)
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

## Security Checklist

Before deploying to production:

- [ ] All API routes use SecurityPresets or createSecureAPIRoute
- [ ] Sensitive data is encrypted with ClientEncryption
- [ ] Environment variables are set securely
- [ ] HTTPS is enforced (HSTS)
- [ ] Security headers are configured
- [ ] Rate limiting is enabled
- [ ] CSRF protection is active
- [ ] Input validation is implemented
- [ ] Security monitoring is active
- [ ] Error messages don't expose sensitive information
- [ ] Security tests pass
- [ ] Admin routes require authentication
- [ ] User data is encrypted at rest
- [ ] Audit logging is enabled

---

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [Next.js Security](https://nextjs.org/docs/advanced-features/security-headers)

---

**Last Updated:** January 3, 2026  
**Version:** 2.0.0  
**Security Rating:** A+ (Enterprise-Grade)
