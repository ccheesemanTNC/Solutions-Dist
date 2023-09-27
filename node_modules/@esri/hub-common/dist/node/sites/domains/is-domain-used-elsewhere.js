"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDomainUsedElsewhere = void 0;
const lookup_domain_1 = require("./lookup-domain");
/**
 * Check to see if a domain is in use by any site other than the
 * one passed in. This is used in various validators while the
 * user is editing properties of the site.
 * @param {string} hostname to check
 * @param {string} siteId Site Id we are checking for
 * @param {IHubRequestOptions} hubRequestOptions
 */
function isDomainUsedElsewhere(hostname, siteId, hubRequestOptions) {
    return lookup_domain_1.lookupDomain(hostname, hubRequestOptions)
        .then((domainEntry) => {
        return domainEntry.siteId !== siteId;
    })
        .catch(() => {
        // domain entry not found, ergo not used on another site
        return false;
    });
}
exports.isDomainUsedElsewhere = isDomainUsedElsewhere;
//# sourceMappingURL=is-domain-used-elsewhere.js.map