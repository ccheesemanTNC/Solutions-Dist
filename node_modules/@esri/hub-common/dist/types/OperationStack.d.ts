import { IOperation, ISerializedOperationStack } from "./types";
/**
 * Allows an application to track a series of operations, storing information
 * about the arguments passes in and the results returned
 *
 * ```js
 * import { OperationStack } from '@esri/solution-common';
 *
 * const stack = new OperationStack();
 *
 * // start an operation by type
 * const id = stack.start('getItem');
 * //.. work happens...
 * stack.finish(id);
 *
 * // start an operation with an Operation object
 * stack.start({
 *   id: 'createItem_1',
 *   type: 'createItem',
 *   inputs: {
 *    item: {...truncated...},
 *    portal: 'https://www.arcgis.com',
 *    username: 'jsmith'
 *   },
 * });
 * // make the call
 * stack.finish('createItem_1', {newItemId: '00cf213'});
 *
 * // later you can get that information back out of the stack
 * const prevOp = stack.getOperation('createItem_1);
 *
 * // and if you need to roll back you can use the
 * // .cleanup and .output properties to help orchestrate
 *
 * ```
 *
 *
 * Can be used to implement "atomic" operations in an environment that does not
 * have this as a core feature
 */
export default class OperationStack {
    /**
     * Internal array of Operations
     *
     * @private
     * @type {IOperation[]}
     * @memberof OperationStack
     */
    private operations;
    /**
     * Creates an instance of OperationStack.
     * @memberof OperationStack
     */
    constructor();
    /**
     * Start an Operation
     *
     * ```js
     * const stack = new OperationStack();
     * stack.startOperation({
     *  id: 'get-bc3',
     *  type: 'getItem',
     *  cleanup: 'n/a',
     *  inputs: {
     *    id: 'bc3',
     *    owner: 'vader'
     *  }
     * });
     * // do work
     * stack.finish('get-bc3');
     * ```
     *
     *
     * @param {IOperation} operation
     * @memberof OperationStack
     */
    startOperation(operation: IOperation): void;
    /**
     * Start an operation without requiring a full operation
     *
     * ```js
     * const opId = stack.start('getItems');
     * //...work happens
     * stack.finish(opId);
     * ```
     *
     * @param {string} type Type of the operation. i.e. getItem
     * @param {Record<string, unknown>} [params] optionally pass in id, inputs, cleanup
     * @returns {string} Identifier of the new stack entry
     * @memberof OperationStack
     */
    start(type: string, params?: Record<string, unknown>): string;
    /**
     * Returns a reference to an Operation
     *
     * @param {string} id Unique Identifier
     * @returns {Operation}
     * @memberof OperationStack
     */
    getOperation(id: string): IOperation;
    /**
     * Returns reference to the operations array
     *
     * @returns {Operation[]}
     * @memberof OperationStack
     */
    getOperations(): IOperation[];
    /**
     * Inform the stack that an operation has finished.
     *
     * This will append in a duration property, and mark
     * the state as 'completed'.
     *
     * @param {string} id Unique identifier of the Operation
     * @param {Record<string, unknown>} [options] outputs
     * @memberof OperationStack
     */
    finish(id: string, options?: Record<string, unknown>): void;
    /**
     * Merge a serialized operation stack into
     * a stack instance
     *
     * ```js
     *    import { OperationStack } from '@esri/solution-common';
     *    function someFunction() {
     *      const stack = new OperationStack();
     *      stack.start('getItem', {id: 'get-bc3'});
     *      // do some work...
     *      stack.finish('get-bc3');
     *
     *      const itm = {title: 'Fake Item', type: 'Web Map'};
     *      // create an entry for the function we are about to call...
     *      stack.start('createItem', {id: 'createItem_01', inputs: {item: itm}});
     *      // call a function that does work, and has it's own stack
     *      // and returns a serialized version as part of it's results
     *      return createItem(itm)
     *      .then((result) => {
     *        // tell the stack the last operation finished...
     *        stack.finish('createItem_01');
     *        // merge in the stack from the function we called
     *        stack.merge(result.stack);
     *        // > stack.getCompleted().length === 3
     *      });
     *    }
     *
     *    function createItem (itm) {
     *      const otherStack = new OperationStack();
     *      const id = otherStack.start('createItem');
     *      // make calls to create item etc
     *      otherStack.finish(id, {itemId: newItem.id});
     *      otherStack.start('protectItem', {id: 'protect-00c'});
     *      // make call to protect item...
     *      otherStack.finish('protect-00c');
     *      // all done... return a result with a stack
     *      return Promise.resolve({
     *        success:true,
     *        stack: otherStack.serialize()
     *      });
     *    }
     * ```
     *
     *  Typically used to create a comprehensive list of operations
     *  when a function returns a `SerializedOperationStack` as part of
     *  it's response
     *
     *
     * @param {ISerializedOperationStack} stack
     * @memberof OperationStack
     */
    merge(stack: ISerializedOperationStack): void;
    /**
     * Get a list of the completed operations
     *
     * @returns {IOperation[]}
     * @memberof OperationStack
     */
    getCompleted(): IOperation[];
    /**
     *  Return an array of working operations
     *
     * @returns {IOperation[]}
     * @memberof OperationStack
     */
    getWorking(): IOperation[];
    /**
     * Serialize the completed operations into a set of
     * human readable messages, sorted by the startedAt timestamp
     *
     *
     * @returns {string}
     * @memberof IOperationStack
     */
    toString(): string;
    /**
     * Serialize the stack into simple objects
     *
     * @returns {ISerializedOperationStack}
     * @memberof OperationStack
     */
    serialize(): ISerializedOperationStack;
}
