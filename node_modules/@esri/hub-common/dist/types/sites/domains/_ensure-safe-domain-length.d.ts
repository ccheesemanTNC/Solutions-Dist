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
export declare function _ensureSafeDomainLength(subdomain: string, urlKey?: string): string;
