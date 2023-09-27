import { IModelTemplate, IHubRequestOptions, ITemplateAsset } from "../types";
/**
 * Add a url property to the entries in the assets hash
 * @param {IModelTemplate} template
 * @param {IHubRequestOptions} hubRequestOptions
 */
export declare function addSolutionResourceUrlToAssets(template: IModelTemplate, hubRequestOptions: IHubRequestOptions): ITemplateAsset[];
