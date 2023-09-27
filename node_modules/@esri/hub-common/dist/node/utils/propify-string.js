"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propifyString = void 0;
const util_1 = require("../util");
/**
 * Given a string, strip out chars etc that would make it
 * and invalid javascript property name, then camelize it.
 * @param {string} value String to convert into a property
 */
function propifyString(value) {
    let result = value;
    // strip off any leading numbers...
    result = result.replace(/^[0-9]*/g, "");
    // remove any rando chars...
    result = result.replace(/[^\w\s]/g, "");
    // camelize the rest...
    result = util_1.camelize(result);
    return result;
}
exports.propifyString = propifyString;
//# sourceMappingURL=propify-string.js.map