"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUsersToGroup = void 0;
const get_prop_1 = require("../../objects/get-prop");
const get_with_default_1 = require("../../objects/get-with-default");
const util_1 = require("../../util");
const _consolidate_results_1 = require("./output-processors/_consolidate-results");
const _process_auto_add_1 = require("./output-processors/_process-auto-add");
const _process_invite_1 = require("./output-processors/_process-invite");
const _process_primary_email_1 = require("./output-processors/_process-primary-email");
const _process_secondary_email_1 = require("./output-processors/_process-secondary-email");
const _get_auto_add_users_1 = require("./utils/_get-auto-add-users");
const _get_email_users_1 = require("./utils/_get-email-users");
const _get_invite_users_1 = require("./utils/_get-invite-users");
/**
 * Adds, invites or emails users about joining a group
 * based on the permissions of the requesting user. The
 * function returns a hash of results indicating which
 * operations were attempted and whether they were successful.
 *
 * In general, this algorithm will auto-add all the users
 * that it can, invite the others, and send emails to eligible
 * invited users (See below for more details)
 *
 * Here are a couple caveats to be aware of:
 * 1) If the requestingUser can auto-add to the group (A.K.A. has
 * portal:admin:assignToGroups) no email will be sent, period.
 * 2) Emails can only be sent to members of the same org as the
 * requesting user if they have been invited (not auto-added)
 * to the group. If emails must to be sent to invited members
 * of a second org (e.g a community org), an authenticated user
 * of the second org must be passed in (see secondaryRO)
 * 3) If no email is passed in, no email will be sent
 * 4) If auto-adding fails, the unadded users will be invited
 *
 * @param {string} groupId
 * @param {IUser[]} allUsers
 * @param {IHubRequestOptions} primaryRO Info and authentication for the requesting user
 * @param {IEmail} [email] Email to be sent (if qualifying users are passed in)
 * @param {IHubRequestOptions} [secondaryRO] Info and authentication for emailing members of a secondary organization (typically a community org)
 *
 * @returns {IConsolidatedResult} The operations attempted, whether they were successful and any errors
 */
function addUsersToGroup(groupId, allUsers, primaryRO, email, secondaryRO) {
    // Extract requesting user
    const requestingUser = util_1.cloneObject(get_with_default_1.getWithDefault(primaryRO, "portalSelf.user", {}));
    requestingUser.cOrgId = get_prop_1.getProp(primaryRO, "portalSelf.portalProperties.hub.settings.communityOrg.orgId");
    // Context for each process segment
    const context = {
        groupId,
        allUsers,
        primaryRO,
        email,
        secondaryRO,
        requestingUser,
        usersToAutoAdd: _get_auto_add_users_1._getAutoAddUsers(allUsers, requestingUser),
        usersToInvite: _get_invite_users_1._getInviteUsers(allUsers, requestingUser),
        usersToEmail: _get_email_users_1._getEmailUsers(allUsers, requestingUser, get_prop_1.getProp(email, "copyMe"))
    };
    return _process_auto_add_1._processAutoAdd(context)
        .then(_process_invite_1._processInvite)
        .then(_process_primary_email_1._processPrimaryEmail)
        .then(_process_secondary_email_1._processSecondaryEmail)
        .then(_consolidate_results_1._consolidateResults);
}
exports.addUsersToGroup = addUsersToGroup;
//# sourceMappingURL=add-users-to-group.js.map