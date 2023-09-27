"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canEditSite = void 0;
const objects_1 = require("../objects");
const has_base_priv_1 = require("./has-base-priv");
const can_edit_item_1 = require("./can-edit-item");
/**
 * Checks if user has access to edit site in Hub
 * Currently, Hub Home sites are not editable
 * In initiative context, check is delegated to canEditItem for the initiative site item
 * @param {IItem} model
 * @param {IUser} user
 * @returns {boolean}
 */
function canEditSite(model, user) {
    let res = false;
    const isDefaultHubHome = objects_1.getProp(model, "properties.isDefaultHubHome");
    if (!isDefaultHubHome && has_base_priv_1.hasBasePriv(user)) {
        res = can_edit_item_1.canEditItem(model, user);
    }
    return res;
}
exports.canEditSite = canEditSite;
//# sourceMappingURL=can-edit-site.js.map