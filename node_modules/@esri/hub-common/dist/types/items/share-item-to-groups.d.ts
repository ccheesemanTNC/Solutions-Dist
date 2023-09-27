import { IRequestOptions } from "@esri/arcgis-rest-request";
/**
 * Share an item to a set of groups
 * @param {String} itemId Iten Id to share to the groups
 * @param {Array} groups Array of group id's to which the item will be shared
 * @param {String} owner optional Owner username to determine which endpoint to hit
 * @param {*} requestOptions
 */
export declare function shareItemToGroups(itemId: string, groups: string[], requestOptions: IRequestOptions, owner?: string): Promise<import("@esri/arcgis-rest-portal").ISharingResponse[]>;
