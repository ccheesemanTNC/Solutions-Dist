"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._getHttpAndHttpsUris = void 0;
/**
 * Given a url without a protocol or with either http or https, return an array
 * that contains both the http and https version
 * @param {string} uri Url with either http or https, or no protocol
 * @private
 */
function _getHttpAndHttpsUris(uri) {
    if (!uri) {
        return [];
    }
    const domain = uri.replace(/^http(s?):\/\//, "");
    return [`http://${domain}`, `https://${domain}`];
}
exports._getHttpAndHttpsUris = _getHttpAndHttpsUris;
//# sourceMappingURL=_get-http-and-https-uris.js.map