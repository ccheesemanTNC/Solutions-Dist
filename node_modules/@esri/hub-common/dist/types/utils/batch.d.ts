import { IBatch, IBatchTransform } from "../types";
/**
 * Helper to split a large number of calls into
 * smaller batches of concurrent calls.
 * @param {Array} values Any array of values with which to invoke fn
 * @param {Function} fn The function that will be invoked with each value
 * @param {number} [batchSize=5] The number of concurrent calls to fn, defaults to 5
 * @returns {Promise<IBatch[]>}
 */
export declare function batch(values: IBatch, fn: IBatchTransform, batchSize?: number): Promise<any>;
