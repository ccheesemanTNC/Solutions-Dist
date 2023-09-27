"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDomain = void 0;
const _get_auth_header_1 = require("./_get-auth-header");
const _get_domain_service_url_1 = require("./_get-domain-service-url");
const _check_status_and_parse_json_1 = require("./_check-status-and-parse-json");
/**
 * Create an entry in the domain system
 * @param {IHubDomain} domainEntry Domain hash to be stored
 * @param {IHubRequestOptions} hubRequestOptions
 */
function addDomain(domainEntry, hubRequestOptions) {
    if (hubRequestOptions.isPortal) {
        throw new Error(`addDomain is not available in ArcGIS Enterprise. Instead, edit the hubdomain typekeyword on the item`);
    }
    const headers = _get_auth_header_1._getAuthHeader(hubRequestOptions);
    headers["Content-Type"] = "application/json";
    const url = `${_get_domain_service_url_1._getDomainServiceUrl(hubRequestOptions.hubApiUrl)}`;
    // handle case of siteTitle being numeric
    const title = domainEntry.siteTitle;
    if (typeof title === "number") {
        domainEntry.siteTitle = title.toString();
    }
    return fetch(url, {
        method: "POST",
        headers,
        mode: "cors",
        body: JSON.stringify(domainEntry),
    }).then(_check_status_and_parse_json_1._checkStatusAndParseJson);
}
exports.addDomain = addDomain;
//# sourceMappingURL=add-domain.js.map