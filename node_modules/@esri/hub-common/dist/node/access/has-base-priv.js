"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasBasePriv = void 0;
const utils_1 = require("../utils");
/**
 * Checks for fundamental privilege required by all access checks
 * @param {IUser} user
 * @returns {boolean}
 */
function hasBasePriv(user) {
    const { privileges = [] } = user;
    return utils_1.includes(privileges, "portal:user:createItem");
}
exports.hasBasePriv = hasBasePriv;
//# sourceMappingURL=has-base-priv.js.map