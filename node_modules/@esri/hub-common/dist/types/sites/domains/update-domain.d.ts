import { IDomainEntry } from "../../types";
import { IHubRequestOptions } from "../../types";
/**
 * Update an entry in the domain system
 * @param {IHubDomain} domainEntry  Doman object to be updated
 * @param {IHubRequestOptions} hubRequestOptions
 */
export declare function updateDomain(domainEntry: IDomainEntry, hubRequestOptions: IHubRequestOptions): Promise<any>;
