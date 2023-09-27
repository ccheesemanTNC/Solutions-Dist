"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._mapValues = void 0;
/**
 * Maps over the values of an object (one level deep)
 * @param obj
 * @param fn
 * @private
 */
function _mapValues(obj, fn) {
    const keys = Object.keys(obj);
    const newObject = keys.reduce(function (acc, currentKey) {
        acc[currentKey] = fn(obj[currentKey], currentKey, obj);
        return acc;
    }, {});
    return newObject;
}
exports._mapValues = _mapValues;
//# sourceMappingURL=_map-values.js.map