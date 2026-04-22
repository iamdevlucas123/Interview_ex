/**
 * 07. Batch Processor
 *
 * Write a function that processes items in batches.
 *
 * Signature:
 * processInBatches(items, batchSize, worker)
 *
 * Requirements:
 * - Split `items` into batches of size `batchSize`
 * - Call `worker(batch)` for each batch
 * - `worker` returns a Promise
 * - Batches must be processed sequentially
 * - Return a single flattened array of results
 *
 * Example:
 * await processInBatches([1, 2, 3, 4, 5], 2, async (batch) => batch.map(x => x * 2))
 * -> [2, 4, 6, 8, 10]
 */

async function processInBatches(items, batchSize, worker) {
    // TODO: implement
}

