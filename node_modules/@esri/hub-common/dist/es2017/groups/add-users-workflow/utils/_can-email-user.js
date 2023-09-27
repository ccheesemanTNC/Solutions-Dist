/**
 * @private
 *
 * returns whether or not the users are in the same org
 */
export function _canEmailUser(recipient, sender) {
    return recipient.orgId === sender.orgId;
}
//# sourceMappingURL=_can-email-user.js.map