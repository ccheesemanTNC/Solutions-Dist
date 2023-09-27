import { IHubRequestOptions } from "../types";
/**
 * Add a token to the resource request if the request is to the portal
 * @param {string} url Resource Url
 * @param {IRequestOptions} requestOptions
 * @private
 */
export declare function _addTokenToResourceUrl(url: string, requestOptions: IHubRequestOptions): string;
