/**
 * @private
 *
 * A user can be auto-added if they are part of the requesting user's e-org
 * or c-org and the requesting user has the assignToGroups privilege
 */
export function _getAutoAddUsers(users, requestingUser) {
    let usersToAutoAdd = [];
    if (requestingUser.privileges.indexOf("portal:admin:assignToGroups") !== -1) {
        const orgIds = [requestingUser.orgId, requestingUser.cOrgId].filter(o => o);
        usersToAutoAdd = users.filter(u => orgIds.indexOf(u.orgId) !== -1);
    }
    return usersToAutoAdd;
}
//# sourceMappingURL=_get-auto-add-users.js.map