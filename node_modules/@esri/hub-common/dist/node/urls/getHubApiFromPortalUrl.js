"use strict";
/**
 * Cross-walk from a portalUrl to the corresponding Hub API Url
 *
 * If the passed url is not recognized, then this will return `undefined`
 * @param portalUrl
 * @returns
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHubApiFromPortalUrl = void 0;
function getHubApiFromPortalUrl(portalUrl) {
    let result;
    if (portalUrl.match(/(qaext|\.mapsqa)\.arcgis.com/)) {
        result = "https://hubqa.arcgis.com";
    }
    else if (portalUrl.match(/(devext|\.mapsdevext)\.arcgis.com/)) {
        result = "https://hubdev.arcgis.com";
    }
    else if (portalUrl.match(/(www|\.maps)\.arcgis.com/)) {
        result = "https://hub.arcgis.com";
    }
    return result;
}
exports.getHubApiFromPortalUrl = getHubApiFromPortalUrl;
//# sourceMappingURL=getHubApiFromPortalUrl.js.map