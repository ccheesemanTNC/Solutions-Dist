"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadResourcesFromUrl = void 0;
const fetch_and_upload_resource_1 = require("./fetch-and-upload-resource");
const fetch_and_upload_thumbnail_1 = require("./fetch-and-upload-thumbnail");
const _add_token_to_resource_url_1 = require("./_add-token-to-resource-url");
/**
 * Given an Item and an array of resources, upload them
 * @param {Object} itemModel Item add the resource to
 * @param {Array} resources Array of resources, with urls, to upload to the item
 * @param {Object} requestOptions {authentication}
 */
function uploadResourcesFromUrl(itemModel, resources, requestOptions) {
    if (Array.isArray(resources)) {
        const resourcePromises = resources.reduce((acc, resource) => {
            if (resource.url) {
                const opts = {
                    id: itemModel.item.id,
                    owner: itemModel.item.owner,
                    fileName: resource.name,
                    url: _add_token_to_resource_url_1._addTokenToResourceUrl(resource.url, requestOptions),
                    authentication: requestOptions.authentication
                };
                if (resource.type === "thumbnail") {
                    acc.push(fetch_and_upload_thumbnail_1.fetchAndUploadThumbnail(opts));
                }
                else {
                    // treat as a resource
                    acc.push(fetch_and_upload_resource_1.fetchAndUploadResource(opts));
                }
            }
            return acc;
        }, []);
        // Let them resolve...
        return Promise.all(resourcePromises);
    }
    else {
        return Promise.resolve([]);
    }
}
exports.uploadResourcesFromUrl = uploadResourcesFromUrl;
//# sourceMappingURL=upload-resources-from-url.js.map