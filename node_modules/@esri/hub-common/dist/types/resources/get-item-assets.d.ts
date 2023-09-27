import { IHubRequestOptions, ITemplateAsset } from "../types";
import { IItem } from "@esri/arcgis-rest-types";
/**
 * Given an item, return an array of assets that includes
 * all the resources, as well as the thumbnail
 * @param {object} item Item
 * @param {IHubRequestOptions} IHubRequestOptions
 */
export declare function getItemAssets(item: IItem, hubRequestOptions: IHubRequestOptions): Promise<ITemplateAsset[]>;
