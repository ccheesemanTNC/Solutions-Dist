"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHubApiUrlFromPortal = void 0;
const get_hub_url_from_portal_1 = require("./get-hub-url-from-portal");
/**
 * Return the Portal url based on the portal self
 * @param {Object} portal Portal Self
 */
function getHubApiUrlFromPortal(portal) {
    return `${get_hub_url_from_portal_1.getHubUrlFromPortal(portal)}/api/v3`;
}
exports.getHubApiUrlFromPortal = getHubApiUrlFromPortal;
//# sourceMappingURL=get-hub-api-url-from-portal.js.map