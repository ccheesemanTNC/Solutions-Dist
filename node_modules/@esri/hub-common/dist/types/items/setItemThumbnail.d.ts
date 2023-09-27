import { IUserRequestOptions } from "@esri/arcgis-rest-auth";
/**
 * Upload a file to be used as the thumbnail for an item
 * @param id
 * @param file
 * @param filename
 * @param requestOptions
 */
export declare function setItemThumbnail(id: string, file: any, filename: string, requestOptions: IUserRequestOptions): Promise<void>;
