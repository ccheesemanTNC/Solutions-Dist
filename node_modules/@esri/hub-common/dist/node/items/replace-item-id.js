"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceItemId = void 0;
const util_1 = require("../util");
const objects_1 = require("../objects");
/**
 * Replaces instances of item ids on an item model
 * @param {Object} obj Object graph to traverse
 * @param {string} itemId id to replace with `{{appid}}`
 */
function replaceItemId(obj, itemId, replacement = "{{appid}}") {
    const clone = util_1.cloneObject(obj);
    const re = new RegExp(itemId, "g");
    return objects_1.deepStringReplace(clone, re, replacement);
}
exports.replaceItemId = replaceItemId;
//# sourceMappingURL=replace-item-id.js.map