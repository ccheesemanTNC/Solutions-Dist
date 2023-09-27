"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._processSecondaryEmail = void 0;
const _can_email_user_1 = require("../../add-users-workflow/utils/_can-email-user");
const _is_org_admin_1 = require("../../add-users-workflow/utils/_is-org-admin");
const objects_1 = require("../../../objects");
const email_org_users_1 = require("../workflow-sections/email-org-users");
/**
 * @private
 *
 * If a secondary authentication is passed in AND
 * an email object is passed in AND
 * the previous invitation call was successful:
 *
 * Send an email notification to the invited
 * users that are part of the secondary authentication's org
 */
function _processSecondaryEmail(context) {
    let response = Promise.resolve(context);
    // If secondaryRO provided, send email to the invited users in the secondaryRO's org (typically a community org)
    if (context.email &&
        context.secondaryRO &&
        objects_1.getProp(context, "inviteResult.success")) {
        const secondaryUser = objects_1.getWithDefault(context, "secondaryRO.portalSelf.user", {});
        const secondaryOrgUsersToEmail = context.usersToInvite.filter(u => _can_email_user_1._canEmailUser(u, secondaryUser));
        response = email_org_users_1.emailOrgUsers(secondaryOrgUsersToEmail, context.email, context.secondaryRO.authentication, _is_org_admin_1._isOrgAdmin(secondaryUser)).then(result => {
            context.secondaryEmailResult = result;
            return context;
        });
    }
    return response;
}
exports._processSecondaryEmail = _processSecondaryEmail;
//# sourceMappingURL=_process-secondary-email.js.map