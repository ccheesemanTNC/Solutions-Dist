"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lookupDomain = void 0;
const _lookup_portal_1 = require("./_lookup-portal");
const _get_domain_service_url_1 = require("./_get-domain-service-url");
const _get_auth_header_1 = require("./_get-auth-header");
const _check_status_and_parse_json_1 = require("./_check-status-and-parse-json");
/**
 * Fetch a the information about a domain.
 * Different implementation for Portal vs AGO
 * @param {string} hostname of domain record to locate
 * @param {IHubRequestOptions} hubRequestOptions
 */
function lookupDomain(hostname, hubRequestOptions) {
    if (hubRequestOptions.isPortal) {
        return _lookup_portal_1._lookupPortal(hostname, hubRequestOptions);
    }
    else {
        const url = `${_get_domain_service_url_1._getDomainServiceUrl(hubRequestOptions.hubApiUrl)}/${hostname}`;
        const headers = _get_auth_header_1._getAuthHeader(hubRequestOptions);
        return fetch(url, { method: "GET", headers, mode: "cors" }).then(_check_status_and_parse_json_1._checkStatusAndParseJson);
    }
}
exports.lookupDomain = lookupDomain;
//# sourceMappingURL=lookup-domain.js.map