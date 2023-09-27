import { addGroupUsers } from "@esri/arcgis-rest-portal";
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
export function autoAddUsers(id, users, authentication) {
    let response = Promise.resolve(null);
    if (users.length) {
        const args = {
            id,
            users: users.map(u => u.username),
            authentication
        };
        response = addGroupUsers(args);
    }
    return response;
}
//# sourceMappingURL=auto-add-users.js.map