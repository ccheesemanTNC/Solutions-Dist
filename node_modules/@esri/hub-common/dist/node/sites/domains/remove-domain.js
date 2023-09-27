"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDomain = void 0;
const _get_auth_header_1 = require("./_get-auth-header");
const _get_domain_service_url_1 = require("./_get-domain-service-url");
const _check_status_and_parse_json_1 = require("./_check-status-and-parse-json");
/**
 * Remove a domain entry.
 * User must be a member of the org that owns the domain entry.
 * @param {int} domainId Id of the domain entry to remove
 * @param {IHubRequestOptions} hubRequestOptions`dom
 */
function removeDomain(domainId, hubRequestOptions) {
    if (hubRequestOptions.isPortal) {
        throw new Error(`removeDomain is not available in ArcGIS Enterprise. Instead, edit the hubdomain typekeyword on the item`);
    }
    const headers = _get_auth_header_1._getAuthHeader(hubRequestOptions);
    headers["Content-Type"] = "application/json";
    const url = `${_get_domain_service_url_1._getDomainServiceUrl(hubRequestOptions.hubApiUrl)}/${domainId}`;
    return fetch(url, { method: "DELETE", headers, mode: "cors" }).then(_check_status_and_parse_json_1._checkStatusAndParseJson);
}
exports.removeDomain = removeDomain;
//# sourceMappingURL=remove-domain.js.map