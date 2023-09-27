"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upgradeProtocol = void 0;
/**
 * Add protocol or upgrade http to https
 * @param {string} url
 */
function upgradeProtocol(url) {
    if (url.indexOf("http") === -1) {
        return `https://${url}`;
    }
    else if (url.indexOf("http://") !== -1) {
        return url.replace(/^http:/i, "https:");
    }
    return url;
}
exports.upgradeProtocol = upgradeProtocol;
//# sourceMappingURL=upgrade-protocol.js.map