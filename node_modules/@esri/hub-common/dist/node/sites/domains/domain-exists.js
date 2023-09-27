"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.domainExists = void 0;
const _get_domain_service_url_1 = require("./_get-domain-service-url");
const _get_auth_header_1 = require("./_get-auth-header");
const urls_1 = require("../../urls");
/**
 * Check if a domain entry exists. Different from lookupDomain
 * in that this will return true/false, where as lookupDomain will
 * return the domain entry or throw. However, lookupDomain can work
 * with ArcGIS Enterprise.
 * Will throw if used in Portal.
 * @param {string} hostname Domain entry to check for
 * @param {IHubRequestOptions} hubRequestOptions
 */
function domainExists(hostname, hubRequestOptions) {
    if (hubRequestOptions.isPortal) {
        throw new Error(`domainExists is not available in ArcGIS Enterprise.`);
    }
    hostname = urls_1.stripProtocol(hostname);
    const url = `${_get_domain_service_url_1._getDomainServiceUrl(hubRequestOptions.hubApiUrl)}/${hostname}`;
    const headers = _get_auth_header_1._getAuthHeader(hubRequestOptions);
    return fetch(url, { method: "GET", headers, mode: "cors" }).then((response) => response.status !== 404);
}
exports.domainExists = domainExists;
//# sourceMappingURL=domain-exists.js.map