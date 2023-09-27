/**
 * Maps over _all_ values of an object graph
 * @param object
 * @param callback function to be called on each value
 * @param propertyPath an initial path (optional, only changes what is passed to the callback as the "path" argument)
 * @private
 */
export declare function _deepMapValues(object: Record<string, any>, callback: (val: any, path: string) => any, propertyPath?: string): any;
/**
 * Is this a string?
 * @param v
 * @private
 */
export declare function _isString(v: any): boolean;
/**
 * Return if the passed entry is a Date
 * @param v
 * @private
 */
export declare function _isDate(v: any): boolean;
/**
 * Is this a function?
 * @param v
 * @private
 */
export declare function _isFunction(v: any): boolean;
/**
 * Is this an Object?
 * @param v
 * @private
 */
export declare function _isObject(v: any): boolean;
/**
 * Is this a regexp?
 * @param v
 * @private
 */
export declare function _isRegExp(v: any): boolean;
