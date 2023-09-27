import { IItemResourceResponse } from "@esri/arcgis-rest-portal";
import { UserSession } from "@esri/arcgis-rest-auth";
/**
 * Fetch image from a url, and upload as a resource
 * @param {Object} options {id, owner, fileName, url, authentication}
 */
export declare function fetchAndUploadResource(options: {
    id: string;
    owner: string;
    fileName: string;
    url: string;
    authentication: UserSession;
}): Promise<IItemResourceResponse>;
