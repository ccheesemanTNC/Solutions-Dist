"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemHomeUrl = void 0;
const get_portal_url_1 = require("./get-portal-url");
/**
 * Return the URL of the item's page in the Portal Home application
 * @param itemId The item's ID
 * @param portalUrlOrObject a portal base or API URL, a portal object, or request options containing either of those
 * @returns URL to the item's data REST end point, defaults to `https://www.arcgis.com/home/item.html?id={item.id}`
 */
function getItemHomeUrl(itemId, portalUrlOrObject) {
    const portalUrl = get_portal_url_1.getPortalUrl(portalUrlOrObject);
    return `${portalUrl}/home/item.html?id=${itemId}`;
}
exports.getItemHomeUrl = getItemHomeUrl;
//# sourceMappingURL=get-item-home-url.js.map