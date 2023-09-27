"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeObjects = void 0;
const get_prop_1 = require("./get-prop");
const deep_set_1 = require("./deep-set");
/**
 * Apply a specified set properties from a source object to a target object
 *
 * @param {Object} source The source object
 * @param {Object} target The target object
 * @param {Array} allowList Array of property paths (if not provided, source returned)
 */
function mergeObjects(source, target, allowList) {
    if (Array.isArray(allowList) && allowList.length) {
        // we iterate the allowList, applying changes to the target from source
        allowList.forEach(prop => {
            if (get_prop_1.getProp(source, prop) !== undefined) {
                deep_set_1.deepSet(target, prop, get_prop_1.getProp(source, prop));
            }
        });
        // return the modified target object
        return target;
    }
    else {
        // if no property paths were passed in, return the source
        return source;
    }
}
exports.mergeObjects = mergeObjects;
//# sourceMappingURL=merge-objects.js.map