"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHubUrlFromPortal = void 0;
const _get_hub_url_from_portal_hostname_1 = require("./_get-hub-url-from-portal-hostname");
/**
 * Return the Hub Url based on the portal self
 * @param portal
 */
function getHubUrlFromPortal(portal) {
    if (portal.isPortal) {
        throw new Error(`Hub Url is not available in ArcGIS Enterprise`);
    }
    else {
        return _get_hub_url_from_portal_hostname_1._getHubUrlFromPortalHostname(portal.portalHostname);
    }
}
exports.getHubUrlFromPortal = getHubUrlFromPortal;
//# sourceMappingURL=get-hub-url-from-portal.js.map