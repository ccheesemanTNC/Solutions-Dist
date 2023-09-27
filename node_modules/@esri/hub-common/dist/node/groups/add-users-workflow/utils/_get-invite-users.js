"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._getInviteUsers = void 0;
const _get_auto_add_users_1 = require("./_get-auto-add-users");
/**
 * @private
 *
 * A user will be invited if they cannot be auto-added
 */
function _getInviteUsers(users, requestingUser) {
    const autoAddedUsers = _get_auto_add_users_1._getAutoAddUsers(users, requestingUser);
    return users.filter(user => !autoAddedUsers.some(aau => aau.username === user.username));
}
exports._getInviteUsers = _getInviteUsers;
//# sourceMappingURL=_get-invite-users.js.map