import { IHubRequestOptions, IDomainEntry } from "../../types";
/**
 * Get a list
 * @param {string} siteId Item id of the Site
 * @param {IHubRequestOptions} hubRequestOptions
 */
export declare function getDomainsForSite(siteId: string, hubRequestOptions: IHubRequestOptions): Promise<IDomainEntry[]>;
