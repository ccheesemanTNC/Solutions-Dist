/**
 * Extract the domain service from the request options
 * @param {string} hubApiUrl
 * @private
 */
export function _getDomainServiceUrl(hubApiUrl) {
    const base = hubApiUrl || "https://hub.arcgis.com";
    return `${base}/api/v3/domains`;
}
//# sourceMappingURL=_get-domain-service-url.js.map