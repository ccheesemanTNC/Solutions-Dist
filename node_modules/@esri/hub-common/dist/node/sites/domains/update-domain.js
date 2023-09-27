"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDomain = void 0;
const _get_auth_header_1 = require("./_get-auth-header");
const _get_domain_service_url_1 = require("./_get-domain-service-url");
const _check_status_and_parse_json_1 = require("./_check-status-and-parse-json");
/**
 * Update an entry in the domain system
 * @param {IHubDomain} domainEntry  Doman object to be updated
 * @param {IHubRequestOptions} hubRequestOptions
 */
function updateDomain(domainEntry, hubRequestOptions) {
    if (hubRequestOptions.isPortal) {
        throw new Error(`updateDomain is not available in ArcGIS Enterprise. Instead, edit the hubdomain typekeyword on the item`);
    }
    const headers = _get_auth_header_1._getAuthHeader(hubRequestOptions);
    headers["Content-Type"] = "application/json";
    const url = `${_get_domain_service_url_1._getDomainServiceUrl(hubRequestOptions.hubApiUrl)}/${domainEntry.id}`;
    // handle case of siteTitle being numeric
    const title = domainEntry.siteTitle;
    if (typeof title === "number") {
        domainEntry.siteTitle = title.toString();
    }
    return fetch(url, {
        method: "PUT",
        headers,
        mode: "cors",
        body: JSON.stringify(domainEntry),
    }).then(_check_status_and_parse_json_1._checkStatusAndParseJson);
}
exports.updateDomain = updateDomain;
//# sourceMappingURL=update-domain.js.map