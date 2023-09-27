"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHubLocaleAssetUrl = void 0;
const get_portal_url_1 = require("./get-portal-url");
const hub_cdn_urlmap_1 = require("./hub-cdn-urlmap");
// TODO: should this take IHubRequestOptions as well as a portal?
// if so, address when we tackle https://github.com/Esri/hub.js/issues/321
/**
 * Given a Portal object, return the full Hub locale asset url
 * Used for fetching translations
 * @param {Object} portal Portal Self
 */
function getHubLocaleAssetUrl(portal) {
    if (portal.isPortal) {
        // Enterprise - use Site app as source for assets
        const baseUrl = get_portal_url_1.getPortalUrl(portal);
        return `${baseUrl}/apps/sites`;
    }
    else {
        // AGO - Convert portalHostname into CDN url
        const index = portal.portalHostname.split(".")[0];
        const base = hub_cdn_urlmap_1.HUB_CDN_URLMAP[index] || hub_cdn_urlmap_1.HUB_CDN_URLMAP.www;
        return `${base}/opendata-ui/assets`;
    }
}
exports.getHubLocaleAssetUrl = getHubLocaleAssetUrl;
//# sourceMappingURL=get-hub-locale-asset-url.js.map