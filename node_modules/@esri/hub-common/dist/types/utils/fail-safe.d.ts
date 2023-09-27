import { GenericAsyncFunc } from "../types";
/**
 * Wrap an async function such that it will never reject
 * @param {Function} fn Async Function that we want to never fail
 * @param {Object} resolveWith Object to resolve with in the event of a failure
 */
export declare function failSafe(fn: GenericAsyncFunc, resolveWith?: any): GenericAsyncFunc;
