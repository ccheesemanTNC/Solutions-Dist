"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._addTokenToResourceUrl = void 0;
/**
 * Add a token to the resource request if the request is to the portal
 * @param {string} url Resource Url
 * @param {IRequestOptions} requestOptions
 * @private
 */
function _addTokenToResourceUrl(url, requestOptions) {
    let result = url;
    if (url.indexOf("token") === -1) {
        // no token
        // Note: authentication.portal is a fully org url
        // i.e. https://dcdev.maps.arcgis.com/sharing/rest
        // this may need to be smarter to handle non-public solutions
        // shared across orgs
        if (url.indexOf(requestOptions.authentication.portal) > -1) {
            // is the portal
            result = `${url}?token=${requestOptions.authentication.token}`;
        }
    }
    return result;
}
exports._addTokenToResourceUrl = _addTokenToResourceUrl;
//# sourceMappingURL=_add-token-to-resource-url.js.map