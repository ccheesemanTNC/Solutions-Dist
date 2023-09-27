"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autoAddUsers = void 0;
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
/**
 *
 * Attempts to auto-add users to a group
 *
 * @param {string} id ID of the group the users will be added to
 * @param {IUser[]} users
 * @param {IAuthenticationManager} authentication
 *
 * @returns {IAddGroupUsersResult|null} Result of the transaction (null if no users are passed in)
 */
function autoAddUsers(id, users, authentication) {
    let response = Promise.resolve(null);
    if (users.length) {
        const args = {
            id,
            users: users.map(u => u.username),
            authentication
        };
        response = arcgis_rest_portal_1.addGroupUsers(args);
    }
    return response;
}
exports.autoAddUsers = autoAddUsers;
//# sourceMappingURL=auto-add-users.js.map