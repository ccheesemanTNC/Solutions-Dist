import { ICollection, ICollectionState } from "./types";
/**
 * Apply ICollectionState to an ICollection
 *
 * Typically used in a Gallery or Catalog component to
 * set the inital state, based on values deserialized
 * from a query string
 * @param collection
 * @param state
 * @returns
 */
export declare function applyCollectionState(collection: ICollection, state: ICollectionState): ICollection;
/**
 * Serialize the current state of a collection into a hash that
 * can be converted into a query string
 * @param collection
 * @returns
 */
export declare function serializeCollectionState(collection: ICollection): ICollectionState;
