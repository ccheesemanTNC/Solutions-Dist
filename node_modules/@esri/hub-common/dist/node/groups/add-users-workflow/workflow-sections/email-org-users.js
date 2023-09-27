"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailOrgUsers = void 0;
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
/**
 * Attempts to email members of the requesting user's organization.
 *
 * @param {IUser[]} users Users to email (must be in the same org as the requesting user)
 * @param {IEmail} email
 * @param {IAuthenticationManager} authentication
 * @param {boolean} isOrgAdmin // Whether the requesting user in an org admin
 *
 * @returns {object|null} A promise that resolves to the result of the transaction (null if no users are passed in)
 */
function emailOrgUsers(users, email, authentication, isOrgAdmin) {
    let response = Promise.resolve(null);
    if (users.length) {
        const args = {
            authentication,
            message: email.body,
            subject: email.subject,
            notificationChannelType: "email",
            users: users.map(u => u.username)
        };
        if (!isOrgAdmin) {
            args.batchSize = 1;
        }
        response = arcgis_rest_portal_1.createOrgNotification(args);
    }
    return response;
}
exports.emailOrgUsers = emailOrgUsers;
//# sourceMappingURL=email-org-users.js.map