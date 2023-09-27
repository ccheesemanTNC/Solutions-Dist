import OperationError from "./OperationError";
/**
 * Generic Hub Error with an Error stack as well
 * as an optional serialized OperationStack.
 *
 * Also accepts a `rootCause` Error object
 */
export default class HubError extends OperationError {
    /**
     * Creates an instance of HubError.
     * @param {string} operation
     * @param {string} [message]
     * @param {Error} [rootCause]
     * @memberof HubError
     */
    constructor(operation: string, message?: string, rootCause?: Error);
}
