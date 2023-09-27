"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWithDefault = void 0;
const get_prop_1 = require("./get-prop");
/**
 * Gets the value of a property from an object with a
 * default if that prop is undefined
 * @param obj
 * @param prop
 * @param def
 */
function getWithDefault(obj, prop, def) {
    const res = get_prop_1.getProp(obj, prop);
    return res !== undefined ? res : def;
}
exports.getWithDefault = getWithDefault;
//# sourceMappingURL=get-with-default.js.map