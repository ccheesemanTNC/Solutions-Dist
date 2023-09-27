import { getHubUrlFromPortal } from "./get-hub-url-from-portal";
/**
 * Return the Portal url based on the portal self
 * @param {Object} portal Portal Self
 */
export function getHubApiUrlFromPortal(portal) {
    return `${getHubUrlFromPortal(portal)}/api/v3`;
}
//# sourceMappingURL=get-hub-api-url-from-portal.js.map