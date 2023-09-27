"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemDataUrl = void 0;
const get_item_api_url_1 = require("./get-item-api-url");
/**
 * Get the fully qualified URL to the data REST end point for an item
 * @param item w/ id and access
 * @param portalUrlOrObject a portal base or API URL, a portal object, or request options containing either of those
 * @param token token for the current user's session; will only be appended as a query parameter if the item's access is **not** `public`
 * @returns URL to the item's data REST end point, defaults to `https://www.arcgis.com/sharing/rest/content/items/{item.id}/data`
 */
exports.getItemDataUrl = (item, portalUrlOrObject, token) => {
    const url = get_item_api_url_1.getItemApiUrl(item, portalUrlOrObject, token);
    const pattern = `\\/${item.id}\\?f=json`;
    const regExp = new RegExp(pattern);
    // TODO: re-append f param based on item.type?
    return (url && url.replace(regExp, `/${item.id}/data`).replace(/\&token/, "?token"));
};
//# sourceMappingURL=get-item-data-url.js.map