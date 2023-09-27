"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._unprotectAndRemoveGroup = void 0;
const utils_1 = require("../utils");
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
/**
 * Unprotect and Remove a Group.
 * Assumed caller has checked that the current user should be able
 * to unprotect and remove the group. Underlying calls are failsafe
 * so a failure to unprotect or remove the group will not reject
 * @param {IUserGroupOptions} userGroupOptions id and authentication
 * @private
 */
function _unprotectAndRemoveGroup(userGroupOptions) {
    const failSafeUnprotect = utils_1.failSafe(arcgis_rest_portal_1.unprotectGroup, { success: true });
    const failSafeRemove = utils_1.failSafe(arcgis_rest_portal_1.removeGroup, { success: true });
    return failSafeUnprotect(userGroupOptions).then(() => {
        return failSafeRemove(userGroupOptions);
    });
}
exports._unprotectAndRemoveGroup = _unprotectAndRemoveGroup;
//# sourceMappingURL=_unprotect-and-remove-group.js.map