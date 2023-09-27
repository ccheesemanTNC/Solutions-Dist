import { getProp } from "../../../objects/get-prop";
import { inviteUsers } from "../workflow-sections/invite-users";
/**
 * @private
 */
export function _processInvite(context) {
    return inviteUsers(getProp(context, "groupId"), getProp(context, "usersToInvite"), getProp(context, "primaryRO.authentication")).then(result => {
        context.inviteResult = result;
        return context;
    });
}
//# sourceMappingURL=_process-invite.js.map