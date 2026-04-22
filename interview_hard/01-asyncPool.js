/**
 * 01. Async Pool
 *
 * Write a function asyncPool(limit, tasks) that runs asynchronous task functions
 * with a maximum concurrency limit.
 *
 * Requirements:
 * - `tasks` is an array of functions, each returning a Promise
 * - No more than `limit` tasks may run at the same time
 * - Preserve the original result order
 * - Reject immediately if any task rejects
 *
 * Example:
 * await asyncPool(2, [
 *   () => fetchUser(1),
 *   () => fetchUser(2),
 *   () => fetchUser(3)
 * ])
 */

async function asyncPool(limit, tasks) {
    // TODO: implement
}

