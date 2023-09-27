"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hubApiSearch = void 0;
const __1 = require("..");
/**
 * Search the Hub API
 *
 * @param requestOptions
 * @returns JSONAPI response
 */
function hubApiSearch(requestOptions) {
    // derive default headers if authentication
    const authentication = requestOptions.authentication;
    const headers = authentication &&
        authentication.serialize && { authentication: authentication.serialize() };
    const defaults = {
        headers,
        httpMethod: "POST",
    };
    return __1.hubApiRequest("/search", Object.assign(Object.assign({}, defaults), requestOptions));
}
exports.hubApiSearch = hubApiSearch;
//# sourceMappingURL=hub-api-search.js.map