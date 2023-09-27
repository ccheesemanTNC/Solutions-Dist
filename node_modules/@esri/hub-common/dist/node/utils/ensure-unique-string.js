"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureUniqueString = void 0;
const includes_1 = require("./includes");
/**
 * Given an array of strings, add a value and ensure it is unique by incrementing a suffix number
 * @param {Array} entries array of strings
 * @param {string} value string to uniqueify and add
 */
function ensureUniqueString(entries, value) {
    let foundUnique = false;
    let num = 0;
    let chk = value;
    while (!foundUnique) {
        if (includes_1.includes(entries, chk)) {
            num++;
            chk = `${value}-${num}`;
        }
        else {
            foundUnique = true;
        }
    }
    return chk;
}
exports.ensureUniqueString = ensureUniqueString;
//# sourceMappingURL=ensure-unique-string.js.map