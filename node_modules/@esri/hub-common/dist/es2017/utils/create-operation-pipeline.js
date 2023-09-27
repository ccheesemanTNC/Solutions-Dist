import OperationError from "../OperationError";
/**
 * Returns a function that orchestrates a pipeline of smaller functions.
 * See [Composing Workflows](../../../guides/composing-workflows) for more information.
 *
 * All the functions must adhere to the `PipelineFn<T>` signature:
 *
 * `(value: IPipeable<T>) => Promise<IPipeable<T>>`
 *
 * Given an array of OperationPipeFns, run them in sequence and return the resultant promise
 *
 * i.e. `createOperationPipeline([fn1, fn2, f3])` will return in a function that chains
 * the functions like this: `fn1(input).then(fn2).then(fn3).then(result)`
 *
 * @param fns functions to be run in sequence
 * @returns Promise<Pipable<T>>
 */
export const createOperationPipeline = (fns) => (input) => {
    return fns.reduce((chain, func) => {
        return chain.then(func).catch((err) => {
            // if it's an OperationError we can just reject with it...
            if (err.name === "OperationError") {
                return Promise.reject(err);
            }
            else {
                // otherwise, create an OperationError and reject with that
                const msg = `IPipeableFn did not reject with an OperationError \n Operation Stack: \n ${input.stack.toString()}`;
                const opErr = new OperationError("pipeline execution error", msg);
                opErr.operationStack = input.stack.serialize();
                return Promise.reject(opErr);
            }
        });
    }, Promise.resolve(input));
};
//# sourceMappingURL=create-operation-pipeline.js.map