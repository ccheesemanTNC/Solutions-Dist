/**
 * ```js
 * import { cloneObject } from "@esri/hub-common";
 * const original = { foo: "bar" }
 * const copy = cloneObject(original)
 * copy.foo // "bar"
 * copy === original // false
 * ```
 * Make a deep clone, including arrays. Does not handle functions!
 */
export declare function cloneObject<T>(obj: T): T;
/**
 * Given an array of objects, convert into an object, with each
 * entry assigned the key via the keyprop
 */
export declare function arrayToObject(arr: any[], key: string): any;
/**
 * Given an object, convert into an array, with each
 * something or other
 */
export declare function objectToArray(obj: {
    [index: string]: any;
}, keyProp?: string): any[];
/**
 * Return an entry from an array by a property name
 */
export declare function findBy(arr: any[], prop: string, value: any): any;
/**
 * Return a new array without the specified value.
 *
 * @export
 * @param {any[]} arr
 * @param {*} val value or object to remove
 * @returns {any[]} Array without the value
 */
export declare function without(arr: any[], value: any): any[];
/**
 * Compose
 * adapted from: https://github.com/stoeffel/compose-function/blob/master/module/index.js
 */
export declare function compose(...fns: any[]): any;
/**
 * Return a random number, prefixed with a string. Used for unique identifiers that do not require
 * the rigor of a full UUID - i.e. node id's, process ids etc.
 * @param prefix String to prefix the random number with so the result is a valid javascript property
 */
export declare function createId(prefix?: string): string;
/**
 * Append or replace a value on an object, using a specified key, if the value is not null.
 * This is a very useful companion to the [getProp()](../getProp/) utility.
 *
 * Note: object that is passed in is cloned before the property is appended.
 *
 * Allows for code like:
 *
 * ```js
 * let model = {
 *  item: {
 *    title: 'some example object',
 *    description: 'this is some longer text',
 *    type: 'Web Map',
 *    properties: {
 *      sourceId: '3ef'
 *    }
 *  },
 *  data: {
 *    theme: 'orange',
 *    parcelLayer: {
 *      primaryField: 'PIN'
 *    }
 *  }
 * };
 *
 * // Let's extract some details into an object.
 * const summary = [
 *  'item.title',
 *  'item.description',
 *  'item.missingProp',
 *  'data.parcelLayer.primaryField'].reduce((acc, prop) => {
 *   // create the property name... you could do this however...
 *   let propName = prop.split('.').reverse()[0];
 *   return maybeAdd(propName, getProp(model, key), acc);
 * }, {});
 *
 * // summary =>
 * // {
 * //   title: 'some example object',
 * //   description: 'this is some longer text',
 * //   primaryField: 'PIN'
 * // }
 * ```
 * @param key - key to use when appending to the object
 * @param val - the possibly null value
 * @param target - the object to update
 */
export declare function maybeAdd(key: string, val: any, target: any): any;
/**
 * Append a value to an array, if the value is not null.
 * This is a very useful companion to the [getProp()](../getProp/) utility.
 *
 * Note: the array that is passed in is cloned before being appended to.
 *
 * Allows for code like:
 * ```js
 *  // example object
 * let model = {
 *  item: {
 *    id: 'c00',
 *    title: 'some example object',
 *    description: 'this is some longer text',
 *    type: 'Web Map',
 *    properties: {
 *      sourceId: '3ef'
 *    }
 *  },
 *  data: {
 *    theme: 'orange',
 *    parcelLayer: {
 *      itemId: '7ca',
 *      primaryField: 'PIN'
 *    }
 *  }
 * };
 * // lets pluck some id's into an array...
 * maybePush(getProp(model, 'item.properties.sourceId'), []);
 * // > ['3ef']
 *
 * // now try to get a value from a property that is missing...
 * maybePush(getProp(obj, 'item.properties.childId'), []);
 * // > []
 *
 * // easily pluck values via property paths
 * const summary = [
 *  'item.id',
 *  'item.properties.sourceId',
 *  'item.properties.childId',
 *  'data.parcelLayer.itemId'].reduce((acc, prop) => {
 *   return maybePush(getProp(model, key), acc);
 * }, []);
 *
 * // summary => ['c00', '3ef', '7ca']
 *
 * ```
 *
 * @param val - the possibly null value
 * @param target - the array to add the value to
 */
export declare function maybePush(val: any, target: any[]): any[];
/**
 * Convert a string to camelCase
 *
 * @export
 * @param {string} value
 * @returns {string} camelCased string
 */
export declare function camelize(value: string): string;
/**
 * Determines if a value is unique in an array
 * Allows for code like:
 *
 * ```js
 * const ary = [ 1, 2, 3, 3, 4, 5, 1 ];
 *
 * const result = ary.filter(unique);
 *
 * result => [ 1, 2, 3, 4, 5 ]
 * ```
 * @param value - the value to search for
 * @param index - the index of the searched value
 * @param ary - the array to search
 * @returns {boolean} - indicating if the value is unique in the array
 */
export declare function unique(value: any, index: number, ary: any[]): boolean;
/**
 * Return array of unique objects, based on a deep property value
 *  Note: Property you compare on should be a primative type
 * @export
 * @template T
 * @param {T[]} arr
 * @param {string} prop
 * @return {*}  {T[]}
 */
export declare function uniqueBy<T>(arr: T[], prop: string): T[];
/**
 * Return last element of an array
 *
 * @export
 * @template T
 * @param {T[]} arr
 * @return {*}  {T}
 */
export declare function last<T>(arr: T[]): T;
/**
 * Filter an array by a deep property value
 *
 * @export
 * @template T
 * @param {T[]} arr
 * @param {string} prop
 * @param {unknown} val
 * @return {*}  {T[]}
 */
export declare function filterBy<T>(arr: T[], prop: string, val: unknown): T[];
/**
 * Extends the target object with props from the source object, overwriting identically named
 * props in target with those from source, ignoring null and undefined values; similar to $.extend.
 * Performs a deep extend by default, unless deep = false is passed as the third arg.
 *
 * @param target - the object that will take props from source
 * @param source - the object from which to take props
 * @param deep - whether or not to perform a deep (recursive) extend of source
 */
export declare function extend(target: {
    [index: string]: any;
}, source: {
    [index: string]: any;
}, deep?: boolean): {
    [index: string]: any;
};
/**
 * Add number of days to a given date
 *
 * @export
 * @param {string} date
 * @param {number} numOfDays
 * @returns {string} date string with numOfDays added to the given date
 */
export declare function addDays(date: string, numOfDays: number): string;
/**
 * Returns an array with arrays of the given size.
 *
 * @param arr Array to split
 * @param size Size of every group
 */
export declare function chunkArray(arr: any[], size: number): any[][];
/**
 * Determine if a value is null or undefined
 * @param value anything
 * @returns
 */
export declare const isNil: (value: unknown) => boolean;
/**
 * Upper case first letter (only) of a string
 * @param word
 * @returns Word
 */
export declare const capitalize: (word: string) => string;
/**
 * An IE-compatible stand-in for Javascript's [array.flat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
 * @param arr the array
 * @returns an array
 */
export declare function flattenArray(arr: any[]): any[];
