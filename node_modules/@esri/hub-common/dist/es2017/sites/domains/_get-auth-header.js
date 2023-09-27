import { getProp } from "../../objects";
/**
 * Construct the auth header from a hub request options
 * @param {IHubRequestOptions} hubRequestOptions
 * @private
 */
export function _getAuthHeader(hubRequestOptions) {
    const result = {};
    const token = getProp(hubRequestOptions, "authentication.token");
    if (token) {
        result.Authorization = token;
    }
    return result;
}
//# sourceMappingURL=_get-auth-header.js.map