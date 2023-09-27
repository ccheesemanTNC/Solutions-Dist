/**
 * Apply a specified set properties from a source object to a target object
 *
 * @param {Object} source The source object
 * @param {Object} target The target object
 * @param {Array} allowList Array of property paths (if not provided, source returned)
 */
export declare function mergeObjects(source: any, target: any, allowList?: string[]): any;
