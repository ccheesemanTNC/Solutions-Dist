import { IHubRequestOptions, ITemplateAsset, IModelTemplate } from "../types";
/**
 * Convert the resources array on an individual template in a solution
 * into an assets array that can be used to upload the resources to
 * the newly created item.
 * @param {object} template Template from a Solution
 * @param {IHubRequestOptions} hubRequestOptions
 */
export declare function convertSolutionTemplateResourcesToAssets(template: IModelTemplate, hubRequestOptions: IHubRequestOptions): ITemplateAsset[];
