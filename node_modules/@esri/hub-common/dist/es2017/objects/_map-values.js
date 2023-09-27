/**
 * Maps over the values of an object (one level deep)
 * @param obj
 * @param fn
 * @private
 */
export function _mapValues(obj, fn) {
    const keys = Object.keys(obj);
    const newObject = keys.reduce(function (acc, currentKey) {
        acc[currentKey] = fn(obj[currentKey], currentKey, obj);
        return acc;
    }, {});
    return newObject;
}
//# sourceMappingURL=_map-values.js.map