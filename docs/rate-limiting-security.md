# Rate Limiting & DDoS Protection

## Overview
This implementation provides comprehensive protection against abuse, spam, and DDoS attacks for the waitlist form through multiple layers of security.

## Security Layers

### 1. Database-Level Protection (Supabase)

#### Rate Limiting Table
- Tracks submission attempts by IP address
- Configurable limits: 5 attempts per 60 minutes
- Automatic blocking for 15 minutes after limit exceeded
- Automatic cleanup of old entries

#### Row Level Security (RLS) Policies
- **Input validation**: Email format, length limits, character restrictions
- **Spam detection**: Prevents suspicious patterns and script injection
- **Rate limit enforcement**: Database-level rate limiting before insert

#### Features
- IP-based tracking and blocking
- Configurable thresholds (attempts, time windows, block duration)
- Automatic cleanup of expired rate limit entries
- Protection against SQL injection and XSS

### 2. Client-Side Protection

#### Rate Limiting
- Browser-based attempt tracking
- 3 attempts per minute window
- 5-minute client-side blocking
- Fingerprint-based identification

#### Input Sanitization
- Removes dangerous characters: `<>{}()[]|`~!@#$%^&*+=`
- Length validation (2-100 characters for most fields)
- Email format validation
- Automatic trimming and normalization

#### Form Validation
- Real-time validation before submission
- Multi-layer validation checks
- User-friendly error messages
- Prevention of empty or malformed submissions

### 3. Network-Level Protection

#### Exponential Backoff
- Automatic retry with increasing delays
- Base delay: 1 second, max delay: 30 seconds
- Maximum 5 retry attempts
- Graceful failure handling

#### Enhanced Error Handling
- Specific error messages for different failure types
- Rate limit detection and user notification
- Network error recovery
- Graceful degradation

## Configuration

### Database Rate Limits
```sql
-- Modify these values in the check_rate_limit function:
max_attempts: 5        -- Max submissions per window
window_minutes: 60     -- Time window in minutes  
block_minutes: 15      -- Block duration in minutes
```

### Client Rate Limits
```typescript
// In rateLimiter.ts:
maxAttempts: 3         -- Max client attempts
windowMs: 60000        -- 1 minute window
blockDurationMs: 300000 -- 5 minute block
```

## Monitoring & Analytics

### Database Tracking
- IP addresses and user agents logged
- Submission timestamps recorded
- Rate limit violations tracked
- Failed attempt analysis available

### Metrics Available
- Submission success/failure rates
- Rate limit trigger frequency
- Geographic distribution (via IP)
- Peak usage patterns

## Deployment Checklist

### 1. Supabase Setup
- [ ] Run the SQL setup script in Supabase SQL editor
- [ ] Verify tables created: `waitlist`, `rate_limit_log`
- [ ] Test RLS policies are active
- [ ] Confirm function `check_rate_limit` is created

### 2. Environment Variables
- [ ] Set `VITE_SUPABASE_URL` in production
- [ ] Set `VITE_SUPABASE_ANON_KEY` in production
- [ ] Verify environment variables in CI/CD

### 3. Production Considerations
- [ ] Consider implementing IP allowlisting for admin access
- [ ] Set up monitoring for rate limit violations
- [ ] Configure automated cleanup job for old rate limit entries
- [ ] Consider adding CAPTCHA for additional protection

## Security Recommendations

### Additional Protections
1. **CDN/WAF**: Use Cloudflare or similar for additional DDoS protection
2. **CAPTCHA**: Add reCAPTCHA for suspicious activity
3. **IP Geoblocking**: Block requests from certain regions if needed
4. **Monitoring**: Set up alerts for unusual activity patterns

### Maintenance
1. **Regular Cleanup**: Run cleanup function weekly
2. **Log Analysis**: Review rate limit logs for attack patterns
3. **Threshold Tuning**: Adjust limits based on legitimate usage patterns
4. **Performance Monitoring**: Watch database performance under load

## Testing Rate Limits

### Manual Testing
1. Submit form multiple times quickly (should block after 3 client attempts)
2. Wait for block period to expire and try again
3. Test with different browsers/incognito modes
4. Verify error messages are user-friendly

### Database Testing
```sql
-- Check rate limit logs
SELECT * FROM rate_limit_log ORDER BY last_attempt DESC;

-- Manual cleanup
SELECT cleanup_rate_limits();

-- Check blocked IPs
SELECT * FROM rate_limit_log WHERE blocked_until > NOW();
```

## Troubleshooting

### Common Issues
1. **IP Detection**: May not work perfectly in all hosting environments
2. **Clock Sync**: Ensure server times are synchronized
3. **Cleanup**: Monitor storage usage of rate limit logs

### Debug Mode
Enable console logging to see:
- Rate limit checks
- Validation failures  
- Retry attempts
- Error details

## Performance Impact

### Database
- Minimal overhead: Simple indexed queries
- Automatic cleanup prevents table growth
- Efficient IP-based lookups

### Client
- Small bundle size increase (~5KB)
- No significant performance impact
- Local storage for rate limiting data