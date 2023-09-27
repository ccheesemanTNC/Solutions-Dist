import { IHubRequestOptions } from "../../types";
/**
 * Check if a domain entry exists. Different from lookupDomain
 * in that this will return true/false, where as lookupDomain will
 * return the domain entry or throw. However, lookupDomain can work
 * with ArcGIS Enterprise.
 * Will throw if used in Portal.
 * @param {string} hostname Domain entry to check for
 * @param {IHubRequestOptions} hubRequestOptions
 */
export declare function domainExists(hostname: string, hubRequestOptions: IHubRequestOptions): Promise<boolean>;
