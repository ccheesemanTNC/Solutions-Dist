"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._canEmailUser = void 0;
/**
 * @private
 *
 * returns whether or not the users are in the same org
 */
function _canEmailUser(recipient, sender) {
    return recipient.orgId === sender.orgId;
}
exports._canEmailUser = _canEmailUser;
//# sourceMappingURL=_can-email-user.js.map