/**
 * Remove protocol if present
 * @param {string} hostname Hostname
 */
export function stripProtocol(hostname) {
    hostname = hostname.toLowerCase();
    if (hostname.includes("//")) {
        hostname = hostname.split("//")[1];
    }
    return hostname;
}
//# sourceMappingURL=strip-protocol.js.map