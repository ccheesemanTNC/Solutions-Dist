"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._getHubUrlFromPortalHostname = void 0;
/**
 * Parse the portal url, and if it matches one of the AGO
 * Url patterns, return the correct Hub Url
 * If portalUrl does not match an AGO pattern, this will
 * return `undefined`
 * @param portalUrl
 * @private
 */
function _getHubUrlFromPortalHostname(portalUrl) {
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
exports._getHubUrlFromPortalHostname = _getHubUrlFromPortalHostname;
//# sourceMappingURL=_get-hub-url-from-portal-hostname.js.map