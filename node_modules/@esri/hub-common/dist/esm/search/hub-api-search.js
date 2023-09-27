import { __assign } from "tslib";
import { hubApiRequest } from "..";
/**
 * Search the Hub API
 *
 * @param requestOptions
 * @returns JSONAPI response
 */
export function hubApiSearch(requestOptions) {
    // derive default headers if authentication
    var authentication = requestOptions.authentication;
    var headers = authentication &&
        authentication.serialize && { authentication: authentication.serialize() };
    var defaults = {
        headers: headers,
        httpMethod: "POST",
    };
    return hubApiRequest("/search", __assign(__assign({}, defaults), requestOptions));
}
//# sourceMappingURL=hub-api-search.js.map