"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAndUploadResource = void 0;
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
const fetch_image_as_blob_1 = require("./fetch-image-as-blob");
/**
 * Fetch image from a url, and upload as a resource
 * @param {Object} options {id, owner, fileName, url, authentication}
 */
function fetchAndUploadResource(options) {
    // first fetch it as a blob...
    return fetch_image_as_blob_1.fetchImageAsBlob(options.url).then((file) => {
        // upload it to the item...
        return arcgis_rest_portal_1.addItemResource({
            id: options.id,
            owner: options.owner,
            name: options.fileName,
            resource: file,
            authentication: options.authentication
        });
    });
}
exports.fetchAndUploadResource = fetchAndUploadResource;
//# sourceMappingURL=fetch-and-upload-resource.js.map