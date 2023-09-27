import { IModel, IHubRequestOptions, IItemResource } from "../types";
/**
 * Given an Item and an array of resources, upload them
 * @param {Object} itemModel Item add the resource to
 * @param {Array} resources Array of resources, with urls, to upload to the item
 * @param {Object} requestOptions {authentication}
 */
export declare function uploadResourcesFromUrl(itemModel: IModel, resources: IItemResource[], requestOptions: IHubRequestOptions): Promise<any[]>;
