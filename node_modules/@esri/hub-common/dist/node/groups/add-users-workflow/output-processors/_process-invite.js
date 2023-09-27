"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._processInvite = void 0;
const get_prop_1 = require("../../../objects/get-prop");
const invite_users_1 = require("../workflow-sections/invite-users");
/**
 * @private
 */
function _processInvite(context) {
    return invite_users_1.inviteUsers(get_prop_1.getProp(context, "groupId"), get_prop_1.getProp(context, "usersToInvite"), get_prop_1.getProp(context, "primaryRO.authentication")).then(result => {
        context.inviteResult = result;
        return context;
    });
}
exports._processInvite = _processInvite;
//# sourceMappingURL=_process-invite.js.map