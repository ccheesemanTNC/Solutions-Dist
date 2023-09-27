import { ISerializedOperationStack } from "./types";
/**
 * Generic Solution Error with an Error stack as well
 * as an optional serialized OperationStack.
 *
 * Also accepts a `rootCause` Error object
 */
export default class OperationError extends Error {
    /**
     * Stack trace
     *
     * @type {string}
     * @memberof OperationError
     */
    stack: string;
    /**
     * What operation failed
     *
     * @type {string}
     * @memberof OperationError
     */
    operation: string;
    /**
     * Root Error that was thrown
     *
     * @type {Error}
     * @memberof OperationError
     */
    rootCause?: Error;
    operationStack?: ISerializedOperationStack;
    /**
     * Creates an instance of OperationError.
     * @param {string} operation
     * @param {string} [message]
     * @param {Error} [rootCause]
     * @memberof OperationError
     */
    constructor(operation: string, message?: string, rootCause?: Error);
}
