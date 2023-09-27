"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._getAuthHeader = void 0;
const objects_1 = require("../../objects");
/**
 * Construct the auth header from a hub request options
 * @param {IHubRequestOptions} hubRequestOptions
 * @private
 */
function _getAuthHeader(hubRequestOptions) {
    const result = {};
    const token = objects_1.getProp(hubRequestOptions, "authentication.token");
    if (token) {
        result.Authorization = token;
    }
    return result;
}
exports._getAuthHeader = _getAuthHeader;
//# sourceMappingURL=_get-auth-header.js.map