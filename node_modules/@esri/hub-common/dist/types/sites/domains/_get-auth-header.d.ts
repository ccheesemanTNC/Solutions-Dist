import { IHubRequestOptions } from "../../types";
interface IHeaders {
    Authorization?: string;
    [key: string]: string;
}
/**
 * Construct the auth header from a hub request options
 * @param {IHubRequestOptions} hubRequestOptions
 * @private
 */
export declare function _getAuthHeader(hubRequestOptions: IHubRequestOptions): IHeaders;
export {};
