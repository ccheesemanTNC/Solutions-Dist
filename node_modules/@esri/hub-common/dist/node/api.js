"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHubApiUrl = void 0;
const urls_1 = require("./urls");
const _get_hub_url_from_portal_hostname_1 = require("./urls/_get-hub-url-from-portal-hostname");
/**
 * ```js
 * import { getHubApiUrl() } from "@esri/hub-common";
 * //
 * getHubApiUrl({ portal: "https://custom.maps.arcgis.com/sharing/rest" })
 * >> "https://hub.arcgis.com"
 * ```
 * Retrieves the Hub API Url associated with a specific ArcGIS Online organization.
 * @param urlOrObject a Portal URL, Portal API URL, request options object, or Portal self object
 * @returns the associated Hub API Url as a string.
 */
function getHubApiUrl(urlOrObject) {
    const hubApiUrl = urlOrObject && urlOrObject.hubApiUrl;
    if (hubApiUrl) {
        // this is request options w/ hubApiUrl already defined
        return hubApiUrl;
    }
    return _get_hub_url_from_portal_hostname_1._getHubUrlFromPortalHostname(urls_1.getPortalApiUrl(urlOrObject));
}
exports.getHubApiUrl = getHubApiUrl;
//# sourceMappingURL=api.js.map