/**
 * @private
 */
export function _isOrgAdmin(user) {
    return user.role === "org_admin" && !user.roleId;
}
//# sourceMappingURL=_is-org-admin.js.map