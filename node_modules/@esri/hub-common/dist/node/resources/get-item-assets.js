"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemAssets = void 0;
const urls_1 = require("../urls");
const get_item_thumbnail_url_1 = require("./get-item-thumbnail-url");
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
/**
 * Given an item, return an array of assets that includes
 * all the resources, as well as the thumbnail
 * @param {object} item Item
 * @param {IHubRequestOptions} IHubRequestOptions
 */
function getItemAssets(item, hubRequestOptions) {
    const portalRestUrl = urls_1.getPortalApiUrl(hubRequestOptions.portalSelf);
    const itemUrl = `${portalRestUrl}/content/items/${item.id}`;
    // if construct the asset for the thumbnail
    const thumbnailUrl = get_item_thumbnail_url_1.getItemThumbnailUrl(item, hubRequestOptions);
    const assets = [];
    if (thumbnailUrl) {
        assets.push({
            name: item.thumbnail,
            url: thumbnailUrl,
            type: "thumbnail"
        });
    }
    // get all the other resources
    // TODO: see how this works w/ folders
    return arcgis_rest_portal_1.getItemResources(item.id, hubRequestOptions).then(response => {
        const resourceAssets = response.resources.map((e) => {
            return {
                name: e.resource,
                type: "resource",
                url: `${itemUrl}/resources/${e.resource}`
            };
        });
        return assets.concat(resourceAssets);
    });
}
exports.getItemAssets = getItemAssets;
//# sourceMappingURL=get-item-assets.js.map