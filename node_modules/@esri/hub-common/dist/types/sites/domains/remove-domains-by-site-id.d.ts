import { IHubRequestOptions } from "../../types";
/**
 * Remove all domain entries by site id.
 * User must be a member of the org that owns the domain entry.
 * @param {int} domainSiteId of the domain entries to remove
 * @param {IHubRequestOptions} hubRequestOptions`dom
 */
export declare function removeDomainsBySiteId(domainSiteId: string, hubRequestOptions: IHubRequestOptions): Promise<any>;
