"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDomainForLegacySite = void 0;
const utils_1 = require("../../utils");
/**
 * Determine if a domain entry belongs to a legacy site.
 * This is used to allow customers to "reclaim" domains that
 * were associated with legacy sites which can no longer be
 * edited.
 * @param {IHubDomain} domainEntry Domain Info record
 */
function isDomainForLegacySite(domainEntry) {
    return !utils_1.isGuid(domainEntry.siteId);
}
exports.isDomainForLegacySite = isDomainForLegacySite;
//# sourceMappingURL=is-domain-for-legacy-site.js.map