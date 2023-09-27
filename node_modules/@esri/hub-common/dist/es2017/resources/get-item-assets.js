import { getPortalApiUrl } from "../urls";
import { getItemThumbnailUrl } from "./get-item-thumbnail-url";
import { getItemResources } from "@esri/arcgis-rest-portal";
/**
 * Given an item, return an array of assets that includes
 * all the resources, as well as the thumbnail
 * @param {object} item Item
 * @param {IHubRequestOptions} IHubRequestOptions
 */
export function getItemAssets(item, hubRequestOptions) {
    const portalRestUrl = getPortalApiUrl(hubRequestOptions.portalSelf);
    const itemUrl = `${portalRestUrl}/content/items/${item.id}`;
    // if construct the asset for the thumbnail
    const thumbnailUrl = getItemThumbnailUrl(item, hubRequestOptions);
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
    return getItemResources(item.id, hubRequestOptions).then(response => {
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
//# sourceMappingURL=get-item-assets.js.map