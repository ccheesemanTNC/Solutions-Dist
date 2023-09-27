"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._processPrimaryEmail = void 0;
const get_prop_1 = require("../../../objects/get-prop");
const _is_org_admin_1 = require("../utils/_is-org-admin");
const email_org_users_1 = require("../workflow-sections/email-org-users");
/**
 * @private
 *
 * Send email notification if an email object is present and
 * the previous invitation call was successful
 */
function _processPrimaryEmail(context) {
    let response = Promise.resolve(context);
    // Email users if invite succeeds
    if (context.email && get_prop_1.getProp(context, "inviteResult.success")) {
        response = email_org_users_1.emailOrgUsers(context.usersToEmail, context.email, context.primaryRO.authentication, _is_org_admin_1._isOrgAdmin(context.requestingUser)).then(result => {
            context.primaryEmailResult = result;
            return context;
        });
    }
    return response;
}
exports._processPrimaryEmail = _processPrimaryEmail;
//# sourceMappingURL=_process-primary-email.js.map