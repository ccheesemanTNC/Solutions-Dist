"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepFind = exports.deepFindById = void 0;
const _deep_map_values_1 = require("./_deep-map-values");
/**
 * Traverse a graph, locating the first entry with an `id` property that
 * has a specific string or number value
 *
 * ```js
 * const l = {
 *  one: {
 *    two: [
 *      {
 *        id: "n001",
 *        color: "red"
 *      },
 *      {
 *        id: "n002",
 *        color: "yellow"
 *      }
 *    ]
 *  }
 * };
 *
 * const config = deepFindById(l, "n002")
 * //> {id: "n002", color:"yellow"}
 * ```
 *
 * This was designed to search a Site/Page/Project layout, and return
 * the config for a card. There was some concern about the performance
 * and using a real layout object, in the test, it takes ~1.5ms to
 * do the search.
 *
 * @param object
 * @param key
 * @param value
 * @returns
 */
function deepFindById(object, value) {
    const p = (obj) => obj.id === value;
    return deepFind(object, p);
}
exports.deepFindById = deepFindById;
/**
 * Traverse a graph locating an entry that passes the predicate
 *
 * @param object
 * @param predicate
 * @returns
 */
function deepFind(object, predicate) {
    if (Array.isArray(object)) {
        return object.reduce((acc, entry) => {
            if (predicate(entry)) {
                acc = entry;
            }
            else {
                if (isFindable(entry)) {
                    const maybe = deepFind(entry, predicate);
                    if (maybe) {
                        acc = maybe;
                    }
                }
            }
            return acc;
        }, undefined);
    }
    else if (isFindable(object)) {
        if (predicate(object)) {
            return object;
        }
        else {
            return Object.keys(object).reduce((acc, entry) => {
                if (isFindable(object[entry])) {
                    const maybe = deepFind(object[entry], predicate);
                    if (maybe) {
                        acc = maybe;
                    }
                }
                return acc;
            }, undefined);
        }
    }
    else {
        return undefined;
    }
}
exports.deepFind = deepFind;
function isFindable(object) {
    let result = false;
    if (object &&
        _deep_map_values_1._isObject(object) &&
        !_deep_map_values_1._isDate(object) &&
        !_deep_map_values_1._isRegExp(object) &&
        !_deep_map_values_1._isFunction(object)) {
        result = true;
    }
    return result;
}
//# sourceMappingURL=deepFind.js.map