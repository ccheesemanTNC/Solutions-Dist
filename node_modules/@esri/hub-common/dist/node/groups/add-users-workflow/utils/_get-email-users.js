"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._getEmailUsers = void 0;
const _can_email_user_1 = require("./_can-email-user");
const _get_invite_users_1 = require("./_get-invite-users");
/**
 * @private
 *
 * A user can be emailed if they are invited (not auto-added)
 * and the _canEmailUser condition is met
 */
function _getEmailUsers(users, requestingUser, includeSelf = false) {
    const invitedUsers = _get_invite_users_1._getInviteUsers(users, requestingUser);
    const emailUsers = invitedUsers.filter(user => _can_email_user_1._canEmailUser(user, requestingUser));
    if (includeSelf) {
        emailUsers.push(requestingUser);
    }
    return emailUsers;
}
exports._getEmailUsers = _getEmailUsers;
//# sourceMappingURL=_get-email-users.js.map