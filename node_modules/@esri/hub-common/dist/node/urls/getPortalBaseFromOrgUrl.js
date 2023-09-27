"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPortalBaseFromOrgUrl = void 0;
/**
 * Given an org url, get the portal base url
 *
 * i.e. https://myorg.maps.arcgis.com will return https://www.arcgis.com
 *
 * @param orgUrl
 * @returns
 */
function getPortalBaseFromOrgUrl(orgUrl) {
    let result = orgUrl;
    if (orgUrl.match(/(qaext|\.mapsqa)\.arcgis.com/)) {
        result = "https://qaext.arcgis.com";
    }
    else if (orgUrl.match(/(devext|\.mapsdevext)\.arcgis.com/)) {
        result = "https://devext.arcgis.com";
    }
    else {
        /* istanbul ignore else */
        if (orgUrl.match(/(www|\.maps)\.arcgis.com/)) {
            result = "https://www.arcgis.com";
        }
    }
    return result;
}
exports.getPortalBaseFromOrgUrl = getPortalBaseFromOrgUrl;
//# sourceMappingURL=getPortalBaseFromOrgUrl.js.map