"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAndUploadThumbnail = void 0;
const fetch_image_as_blob_1 = require("./fetch-image-as-blob");
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
/**
 * Fetch image from a url, then upload to an item as it's thumbnail
 * @param {object} options
 */
function fetchAndUploadThumbnail(options) {
    // first fetch it as a blob...
    return fetch_image_as_blob_1.fetchImageAsBlob(options.url)
        .then(file => {
        return arcgis_rest_portal_1.updateItem({
            item: {
                id: options.id,
                owner: options.owner
            },
            params: {
                fileName: options.fileName,
                thumbnail: file
            },
            authentication: options.authentication
        }).catch(_ => {
            // resolve b/c this is not crtical
            return Promise.resolve();
        });
    })
        .catch(_ => {
        return Promise.resolve();
    });
}
exports.fetchAndUploadThumbnail = fetchAndUploadThumbnail;
//# sourceMappingURL=fetch-and-upload-thumbnail.js.map