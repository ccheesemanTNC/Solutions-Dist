"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildUrl = void 0;
/**
 * @private
 */
function buildUrl(params) {
    const { host, path, query } = params;
    const baseUrl = host.endsWith("/") ? host : `${host}/`;
    const url = new URL(path, baseUrl);
    url.search = buildQueryString(query);
    return url.toString();
}
exports.buildUrl = buildUrl;
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