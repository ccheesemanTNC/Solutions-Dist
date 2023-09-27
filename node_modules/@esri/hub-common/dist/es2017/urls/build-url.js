/**
 * @private
 */
export function buildUrl(params) {
    const { host, path, query } = params;
    const baseUrl = host.endsWith("/") ? host : `${host}/`;
    const url = new URL(path, baseUrl);
    url.search = buildQueryString(query);
    return url.toString();
}
function buildQueryString(params = {}) {
    const queryParams = Object.keys(params)
        .filter(key => {
        return params[key] !== undefined;
    })
        .reduce((acc, key) => {
        acc[key] = params[key];
        return acc;
    }, {});
    return new URLSearchParams(queryParams).toString();
}
//# sourceMappingURL=build-url.js.map