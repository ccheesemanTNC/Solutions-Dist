"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDomainsBySiteId = void 0;
const _get_auth_header_1 = require("./_get-auth-header");
const _get_domain_service_url_1 = require("./_get-domain-service-url");
const _check_status_and_parse_json_1 = require("./_check-status-and-parse-json");
/**
 * Remove all domain entries by site id.
 * User must be a member of the org that owns the domain entry.
 * @param {int} domainSiteId of the domain entries to remove
 * @param {IHubRequestOptions} hubRequestOptions`dom
 */
function removeDomainsBySiteId(domainSiteId, hubRequestOptions) {
    // TODO: Can remove this if no longer required
    if (hubRequestOptions.isPortal) {
        throw new Error(`removeDomainsBySiteId is not available in ArcGIS Enterprise. Instead, edit the hubdomain typekeyword on the item`);
    }
    const headers = _get_auth_header_1._getAuthHeader(hubRequestOptions);
    headers["Content-Type"] = "application/json";
    const url = `${_get_domain_service_url_1._getDomainServiceUrl(hubRequestOptions.hubApiUrl)}/?siteId=${domainSiteId}`;
    return fetch(url, { method: "DELETE", headers, mode: "cors" }).then(_check_status_and_parse_json_1._checkStatusAndParseJson);
}
exports.removeDomainsBySiteId = removeDomainsBySiteId;
//# sourceMappingURL=remove-domains-by-site-id.js.map