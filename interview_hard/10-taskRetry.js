/**
 * 10. Retry With Backoff
 *
 * Write a function retry(task, options) that retries an async operation.
 *
 * Requirements:
 * - `task` is a function returning a Promise
 * - `options.retries`: maximum retry attempts
 * - `options.baseDelayMs`: initial delay
 * - `options.factor`: multiplier for exponential backoff
 * - `options.shouldRetry(error)`: optional function to decide if retry is allowed
 *
 * Behavior:
 * - Stop retrying when the task succeeds
 * - Stop retrying when retries are exhausted
 * - Stop retrying early if shouldRetry returns false
 */

async function retry(task, options) {
    // TODO: implement
}
