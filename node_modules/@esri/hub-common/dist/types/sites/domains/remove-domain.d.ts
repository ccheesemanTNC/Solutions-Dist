import { IHubRequestOptions } from "../../types";
/**
 * Remove a domain entry.
 * User must be a member of the org that owns the domain entry.
 * @param {int} domainId Id of the domain entry to remove
 * @param {IHubRequestOptions} hubRequestOptions`dom
 */
export declare function removeDomain(domainId: string, hubRequestOptions: IHubRequestOptions): Promise<any>;
