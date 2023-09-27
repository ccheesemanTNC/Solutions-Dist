import { IHubRequestOptions } from "../../types";
/**
 * Check to see if a domain is in use by any site other than the
 * one passed in. This is used in various validators while the
 * user is editing properties of the site.
 * @param {string} hostname to check
 * @param {string} siteId Site Id we are checking for
 * @param {IHubRequestOptions} hubRequestOptions
 */
export declare function isDomainUsedElsewhere(hostname: string, siteId: string, hubRequestOptions: IHubRequestOptions): Promise<boolean>;
