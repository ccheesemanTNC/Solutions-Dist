import { IRequestOptions } from "@esri/arcgis-rest-request";
import OperationStack from "../OperationStack";
import { IHubRequestOptions } from "../types";
/**
 * Container type for Piping in Hub
 */
export interface IPipeable<Type> {
    data: Type;
    stack: OperationStack;
    requestOptions?: IHubRequestOptions | IRequestOptions;
}
/**
 * Signature of a function that can be used with createOperationPipeline
 */
export declare type PipelineFn<T> = (value: IPipeable<T>) => Promise<IPipeable<T>>;
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
export declare const createOperationPipeline: <T>(fns: PipelineFn<T>[]) => (input: IPipeable<T>) => Promise<IPipeable<T>>;
