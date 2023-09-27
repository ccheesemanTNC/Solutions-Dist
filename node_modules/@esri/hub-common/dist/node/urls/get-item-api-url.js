"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemApiUrl = void 0;
const get_portal_api_url_1 = require("./get-portal-api-url");
// NOTE: this fn is tested via getItemDataUrl tests
/**
 * Get the fully qualified URL to the REST end point for an item.
 * @param item w/ id and access
 * @param portalUrlOrObject a portal base or API URL, a portal object, or request options containing either of those
 * @param token token for the current user's session; will only be appended as a query parameter if the item's access is **not** `public`
 * @returns URL to the item's REST end point, defaults to `https://www.arcgis.com/sharing/rest/content/items/{item.id}?f=json`
 */
exports.getItemApiUrl = (item, portalUrlOrObject, token) => {
    const { id, access } = item;
    const url = `${get_portal_api_url_1.getPortalApiUrl(portalUrlOrObject)}/content/items/${id}`;
    const params = new URLSearchParams({ f: "json" });
    if (access !== "public" && token) {
        params.append("token", token);
    }
    return `${url}?${params.toString()}`;
};
//# sourceMappingURL=get-item-api-url.js.map