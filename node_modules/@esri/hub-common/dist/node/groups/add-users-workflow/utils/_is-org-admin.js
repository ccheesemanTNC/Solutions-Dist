"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._isOrgAdmin = void 0;
/**
 * @private
 */
function _isOrgAdmin(user) {
    return user.role === "org_admin" && !user.roleId;
}
exports._isOrgAdmin = _isOrgAdmin;
//# sourceMappingURL=_is-org-admin.js.map