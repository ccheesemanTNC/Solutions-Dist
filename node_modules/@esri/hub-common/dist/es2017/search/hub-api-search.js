import { hubApiRequest } from "..";
/**
 * Search the Hub API
 *
 * @param requestOptions
 * @returns JSONAPI response
 */
export function hubApiSearch(requestOptions) {
    // derive default headers if authentication
    const authentication = requestOptions.authentication;
    const headers = authentication &&
        authentication.serialize && { authentication: authentication.serialize() };
    const defaults = {
        headers,
        httpMethod: "POST",
    };
    return hubApiRequest("/search", Object.assign(Object.assign({}, defaults), requestOptions));
}
//# sourceMappingURL=hub-api-search.js.map