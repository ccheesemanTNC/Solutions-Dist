"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canEditItem = void 0;
const utils_1 = require("../utils");
const objects_1 = require("../objects");
const has_base_priv_1 = require("./has-base-priv");
/**
 * Checks if user has access to edit an item in Hub
 * @param {IItem} item
 * @param {IUser} user
 * @returns {boolean}
 */
function canEditItem(item, user) {
    let res = false;
    const itemControls = ["admin", "update"];
    const { itemControl, owner, orgId: itemOrgId } = item;
    const { roleId, role, username, groups: userGroups, orgId: userOrgId } = user;
    const hasItemControl = utils_1.includes(itemControls, itemControl);
    const isOwner = !!owner && owner === username;
    const isOrgItem = !!itemOrgId && itemOrgId === userOrgId;
    const isItemOrgAdmin = !!isOrgItem && !roleId && role === "org_admin";
    const hasPlatformControl = hasItemControl || isOwner || isItemOrgAdmin;
    const hasPriv = has_base_priv_1.hasBasePriv(user);
    if (hasPriv && hasPlatformControl) {
        res = true;
    }
    else if (hasPriv) {
        const itemGroups = [
            ...(objects_1.getProp(item, "groupIds") || []),
            objects_1.getProp(item, "properties.collaborationGroupId")
        ];
        const isGroupEditable = (group) => utils_1.isUpdateGroup(group) && utils_1.includes(itemGroups, group.id);
        res = userGroups.some(isGroupEditable);
    }
    return res;
}
exports.canEditItem = canEditItem;
//# sourceMappingURL=can-edit-item.js.map