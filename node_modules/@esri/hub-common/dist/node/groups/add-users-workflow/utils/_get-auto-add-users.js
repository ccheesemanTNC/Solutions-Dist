"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._getAutoAddUsers = void 0;
/**
 * @private
 *
 * A user can be auto-added if they are part of the requesting user's e-org
 * or c-org and the requesting user has the assignToGroups privilege
 */
function _getAutoAddUsers(users, requestingUser) {
    let usersToAutoAdd = [];
    if (requestingUser.privileges.indexOf("portal:admin:assignToGroups") !== -1) {
        const orgIds = [requestingUser.orgId, requestingUser.cOrgId].filter(o => o);
        usersToAutoAdd = users.filter(u => orgIds.indexOf(u.orgId) !== -1);
    }
    return usersToAutoAdd;
}
exports._getAutoAddUsers = _getAutoAddUsers;
//# sourceMappingURL=_get-auto-add-users.js.map