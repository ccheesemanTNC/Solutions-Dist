"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDomainsForSite = void 0;
const _get_domain_service_url_1 = require("./_get-domain-service-url");
const _get_auth_header_1 = require("./_get-auth-header");
const _check_status_and_parse_json_1 = require("./_check-status-and-parse-json");
/**
 * Get a list
 * @param {string} siteId Item id of the Site
 * @param {IHubRequestOptions} hubRequestOptions
 */
function getDomainsForSite(siteId, hubRequestOptions) {
    if (hubRequestOptions.isPortal) {
        return Promise.resolve([]);
    }
    const url = `${_get_domain_service_url_1._getDomainServiceUrl(hubRequestOptions.hubApiUrl)}?siteId=${siteId}`;
    const headers = _get_auth_header_1._getAuthHeader(hubRequestOptions);
    return fetch(url, { method: "GET", headers, mode: "cors" })
        .then(_check_status_and_parse_json_1._checkStatusAndParseJson)
        .catch((err) => {
        throw Error(`Error in getDomainsForSite ${err}`);
    });
}
exports.getDomainsForSite = getDomainsForSite;
//# sourceMappingURL=get-domains-for-site.js.map