"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inviteUsers = void 0;
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
/**
 *
 * Attempts to invite users to a group
 *
 * @param {string} id ID of the group the users will be invited to
 * @param {object[]} users
 * @param {object} authentication
 * @param {number} expiration How long the invite will be active (in minutes)
 * @param {string} role What role should they be added as. Defaults to group member
 *
 * @returns {object|null} Result of the transaction (null if no users are passed in)
 */
function inviteUsers(id, users, authentication, expiration = 20160, // default to 2 week expiration TODO: is this actually 2 weeks?
role = "group_member" // default to group member, but allow for team_admin as well
) {
    let response = Promise.resolve(null);
    if (users.length) {
        const args = {
            id,
            users: users.map((u) => u.username),
            authentication,
            role,
            expiration,
        };
        response = arcgis_rest_portal_1.inviteGroupUsers(args);
    }
    return response;
}
exports.inviteUsers = inviteUsers;
//# sourceMappingURL=invite-users.js.map