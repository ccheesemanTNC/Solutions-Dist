"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureProp = void 0;
const deep_set_1 = require("./deep-set");
/**
 * Ensure that an object has a deep property path.
 * This will replace any existing object at the end of the path
 * @param {Object} target Object we want to ensure has some deep property
 * @param {string} path Dotted path to the property we want to ensure exists
 */
function ensureProp(target, path) {
    return deep_set_1.deepSet(target, path);
}
exports.ensureProp = ensureProp;
//# sourceMappingURL=ensure-prop.js.map