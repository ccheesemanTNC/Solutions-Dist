import { includes } from "../utils";
/**
 * Checks for fundamental privilege required by all access checks
 * @param {IUser} user
 * @returns {boolean}
 */
export function hasBasePriv(user) {
    const { privileges = [] } = user;
    return includes(privileges, "portal:user:createItem");
}
//# sourceMappingURL=has-base-priv.js.map