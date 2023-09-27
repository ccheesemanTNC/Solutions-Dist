"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setProp = void 0;
const deep_set_1 = require("./deep-set");
/**
 * Sets a deep object property, constructing the property path as necessary
 *
 * @param path - the path to the property we want to set
 * @param val - the value we want to set it to
 * @param obj - the target object
 */
function setProp(path, val, obj) {
    if (Array.isArray(path)) {
        path = path.join(".");
    }
    deep_set_1.deepSet(obj, path, val);
}
exports.setProp = setProp;
//# sourceMappingURL=set-prop.js.map