"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripProtocol = void 0;
/**
 * Remove protocol if present
 * @param {string} hostname Hostname
 */
function stripProtocol(hostname) {
    hostname = hostname.toLowerCase();
    if (hostname.includes("//")) {
        hostname = hostname.split("//")[1];
    }
    return hostname;
}
exports.stripProtocol = stripProtocol;
//# sourceMappingURL=strip-protocol.js.map