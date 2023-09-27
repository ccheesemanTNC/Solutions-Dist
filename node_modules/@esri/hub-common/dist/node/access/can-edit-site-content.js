"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canEditSiteContent = exports.REQUIRED_PRIVS = void 0;
const utils_1 = require("../utils");
const objects_1 = require("../objects");
const has_base_priv_1 = require("./has-base-priv");
const can_edit_item_1 = require("./can-edit-item");
exports.REQUIRED_PRIVS = [
    "portal:user:createGroup",
    "portal:user:createItem",
    "portal:user:shareToGroup",
    "portal:user:viewOrgGroups",
    "portal:user:viewOrgItems"
];
/**
 * Checks if user has access to content library in Hub
 * In Hub Home context, user access requires additional privileges
 * In initiative context, check is delegated to canEditItem for the initiative site item
 * @param {IItem} item
 * @param {IUser} user
 * @returns {boolean}
 */
function canEditSiteContent(item, user) {
    let res = false;
    const isDefaultHubHome = objects_1.getProp(item, "properties.isDefaultHubHome");
    const hasPriv = has_base_priv_1.hasBasePriv(user);
    if (!isDefaultHubHome && hasPriv) {
        res = can_edit_item_1.canEditItem(item, user);
    }
    else if (hasPriv) {
        const userOrgId = user.orgId;
        const itemOrgId = item.orgId;
        const sameOrg = !!userOrgId && userOrgId === itemOrgId;
        if (sameOrg) {
            const privileges = user.privileges || [];
            res = exports.REQUIRED_PRIVS.every(privilege => utils_1.includes(privileges, privilege));
        }
    }
    return res;
}
exports.canEditSiteContent = canEditSiteContent;
//# sourceMappingURL=can-edit-site-content.js.map