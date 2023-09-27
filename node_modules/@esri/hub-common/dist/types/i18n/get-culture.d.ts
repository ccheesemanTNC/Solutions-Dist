import { IHubRequestOptions } from "../types";
/**
 * Return the culture from the Hub Request Options
 * In priority order: user.culture, portal.culture, en-us
 * @param {IHubRequestOptions} hubRequestOptions
 */
export declare function getCulture(hubRequestOptions: IHubRequestOptions): any;
