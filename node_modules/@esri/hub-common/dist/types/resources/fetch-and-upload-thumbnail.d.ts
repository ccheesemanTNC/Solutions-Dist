import { UserSession } from "@esri/arcgis-rest-auth";
/**
 * Fetch image from a url, then upload to an item as it's thumbnail
 * @param {object} options
 */
export declare function fetchAndUploadThumbnail(options: {
    id: string;
    owner: string;
    fileName: string;
    url: string;
    authentication: UserSession;
}): Promise<any>;
