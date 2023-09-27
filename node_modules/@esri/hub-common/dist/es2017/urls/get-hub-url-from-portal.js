import { _getHubUrlFromPortalHostname } from "./_get-hub-url-from-portal-hostname";
/**
 * Return the Hub Url based on the portal self
 * @param portal
 */
export function getHubUrlFromPortal(portal) {
    if (portal.isPortal) {
        throw new Error(`Hub Url is not available in ArcGIS Enterprise`);
    }
    else {
        return _getHubUrlFromPortalHostname(portal.portalHostname);
    }
}
//# sourceMappingURL=get-hub-url-from-portal.js.map