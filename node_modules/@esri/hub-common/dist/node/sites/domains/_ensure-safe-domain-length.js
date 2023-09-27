"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._ensureSafeDomainLength = void 0;
const util_1 = require("../../util");
const utils_1 = require("../../utils");
/**
 * Ensure that a subdomain is not greater than 63 characters in length
 * Subdomains are prep-ended on the org's url key, and the combined
 * length can not exceed 63 chars as per rules of domains.
 * If the requested subdomain + the url key is > 63 chars, we
 * strip off the last 6 chars and replace that w/ random characeters
 * This was an actual reported bug.
 * @param {String} subdomain Proposed subdomain
 * @param {String} urlKey Org url key
 * @private
 */
function _ensureSafeDomainLength(subdomain, urlKey) {
    let result = util_1.cloneObject(subdomain);
    let max = 63;
    if (urlKey)
        max = max - (urlKey.length + 1);
    if (result.length > max) {
        result = `${result.slice(0, max - 6)}-${utils_1.generateRandomString(5)}`;
    }
    return result;
}
exports._ensureSafeDomainLength = _ensureSafeDomainLength;
//# sourceMappingURL=_ensure-safe-domain-length.js.map