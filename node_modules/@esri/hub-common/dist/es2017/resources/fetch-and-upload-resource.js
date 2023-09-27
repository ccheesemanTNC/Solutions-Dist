import { addItemResource } from "@esri/arcgis-rest-portal";
import { fetchImageAsBlob } from "./fetch-image-as-blob";
/**
 * Fetch image from a url, and upload as a resource
 * @param {Object} options {id, owner, fileName, url, authentication}
 */
export function fetchAndUploadResource(options) {
    // first fetch it as a blob...
    return fetchImageAsBlob(options.url).then((file) => {
        // upload it to the item...
        return addItemResource({
            id: options.id,
            owner: options.owner,
            name: options.fileName,
            resource: file,
            authentication: options.authentication
        });
    });
}
//# sourceMappingURL=fetch-and-upload-resource.js.map