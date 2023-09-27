"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._getDomainServiceUrl = void 0;
/**
 * Extract the domain service from the request options
 * @param {string} hubApiUrl
 * @private
 */
function _getDomainServiceUrl(hubApiUrl) {
    const base = hubApiUrl || "https://hub.arcgis.com";
    return `${base}/api/v3/domains`;
}
exports._getDomainServiceUrl = _getDomainServiceUrl;
//# sourceMappingURL=_get-domain-service-url.js.map