/**
 * 08. Query Cache With TTL
 *
 * Implement a cache for async queries.
 *
 * Requirements:
 * - get(key, fetcher, ttlMs)
 * - If cached value exists and is not expired, return it
 * - If a request for the same key is already in flight, reuse that Promise
 * - When the Promise resolves, cache the value
 * - If the Promise rejects, do not cache the error
 *
 * Focus:
 * - Avoid duplicate concurrent fetches
 * - Keep the implementation race-safe
 */

class QueryCache {
    constructor() {
        // TODO: initialize internal state
    }

    get(key, fetcher, ttlMs) {
        // TODO: implement
    }
}

