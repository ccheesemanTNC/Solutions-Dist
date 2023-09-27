"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._lookupPortal = void 0;
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
const utils_1 = require("../../utils");
/**
 * Lookup a domain in Portal
 * @param {string} hostname to locate the site for
 * @param {IRequestOptions} requestOptions
 * @private
 */
function _lookupPortal(hostname, requestOptions) {
    // for portal we search for a site w/ `hubsubdomain|<domain>` type keyword
    let subdomain = hostname;
    // if this subdomain has a hash in it, knock that off
    if (hostname.indexOf("#/") > -1) {
        subdomain = hostname.split("#/")[1];
    }
    const queryTerm = `hubsubdomain|${subdomain}`;
    const opts = Object.assign({
        q: `typekeywords: ${queryTerm}`,
    }, requestOptions);
    return arcgis_rest_portal_1.searchItems(opts)
        .then((res) => {
        // since the search api stems the terms, we need to verify
        // by looking at the results
        return res.results.filter((r) => {
            return utils_1.includes(r.typeKeywords, queryTerm);
        })[0];
    })
        .then((site) => {
        if (!site)
            throw new Error("site not found");
        return {
            hostname: site.url,
            siteId: site.id,
        };
    });
}
exports._lookupPortal = _lookupPortal;
//# sourceMappingURL=_lookup-portal.js.map