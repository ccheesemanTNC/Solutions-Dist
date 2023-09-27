"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._isRegExp = exports._isObject = exports._isFunction = exports._isDate = exports._isString = exports._deepMapValues = void 0;
const _map_values_1 = require("./_map-values");
/**
 * Maps over _all_ values of an object graph
 * @param object
 * @param callback function to be called on each value
 * @param propertyPath an initial path (optional, only changes what is passed to the callback as the "path" argument)
 * @private
 */
function _deepMapValues(object, callback, propertyPath) {
    propertyPath = propertyPath || "";
    if (Array.isArray(object)) {
        return object.map(deepMapValuesIteratee);
    }
    else if (object &&
        _isObject(object) &&
        !_isDate(object) &&
        !_isRegExp(object) &&
        !_isFunction(object)) {
        return Object.assign({}, object, _map_values_1._mapValues(object, deepMapValuesIteratee));
    }
    else {
        return callback(object, propertyPath);
    }
    function deepMapValuesIteratee(value, key) {
        const valuePath = "" + (propertyPath ? propertyPath + "." + key : key);
        return _deepMapValues(value, callback, valuePath);
    }
}
exports._deepMapValues = _deepMapValues;
// Simple "good-enough" type checks for the tree traversal functions
// these are not bullet-proof and should not be public/docd
/**
 * Is this a string?
 * @param v
 * @private
 */
function _isString(v) {
    return typeof v === "string" || v instanceof String;
}
exports._isString = _isString;
/**
 * Return if the passed entry is a Date
 * @param v
 * @private
 */
function _isDate(v) {
    return v instanceof Date;
}
exports._isDate = _isDate;
/**
 * Is this a function?
 * @param v
 * @private
 */
function _isFunction(v) {
    return typeof v === "function";
}
exports._isFunction = _isFunction;
/**
 * Is this an Object?
 * @param v
 * @private
 */
function _isObject(v) {
    return typeof v === "object";
}
exports._isObject = _isObject;
/**
 * Is this a regexp?
 * @param v
 * @private
 */
function _isRegExp(v) {
    return v instanceof RegExp;
}
exports._isRegExp = _isRegExp;
//# sourceMappingURL=_deep-map-values.js.map