import { IModel } from "../types";
/**
 * Replaces instances of item ids on an item model
 * @param {Object} obj Object graph to traverse
 * @param {string} itemId id to replace with `{{appid}}`
 */
export declare function replaceItemId(obj: IModel | Record<string, any>, itemId: string, replacement?: string): Record<string, any>;
