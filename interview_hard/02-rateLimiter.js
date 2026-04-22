/**
 * 02. Rate Limiter
 *
 * Implement a rate limiter class.
 *
 * Requirements:
 * - constructor(limit, windowMs)
 * - allow(key): returns true if the request is allowed, false otherwise
 * - Track requests independently per key
 * - Use a sliding window approach
 *
 * Example:
 * const limiter = new RateLimiter(3, 60000)
 * limiter.allow("user-1") -> true
 */

class RateLimiter {
    constructor(limit, windowMs) {
        this.limit = limit
        this.windowMs = windowMs
        // TODO: initialize internal state
    }

    allow(key) {
        // TODO: implement
    }
}

