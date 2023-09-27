"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepStringReplace = void 0;
const _deep_map_values_1 = require("./_deep-map-values");
/**
 * Iterate over an object graph, and for all string properties, search for a string,
 * and replace it with another string
 */
function deepStringReplace(obj, stringOrRegex, replacement) {
    const replacedObject = _deep_map_values_1._deepMapValues(obj, function (value) {
        // Only string templates
        if (!_deep_map_values_1._isString(value)) {
            return value;
        }
        let re;
        if (_deep_map_values_1._isRegExp(stringOrRegex)) {
            re = stringOrRegex;
        }
        else {
            re = new RegExp(stringOrRegex, "g");
        }
        return value.replace(re, replacement);
    });
    return replacedObject;
}
exports.deepStringReplace = deepStringReplace;
//# sourceMappingURL=deep-string-replace.js.map