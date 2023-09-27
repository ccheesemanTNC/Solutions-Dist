import { IDomainEntry, IHubRequestOptions } from "../../types";
/**
 * Create an entry in the domain system
 * @param {IHubDomain} domainEntry Domain hash to be stored
 * @param {IHubRequestOptions} hubRequestOptions
 */
export declare function addDomain(domainEntry: Partial<IDomainEntry>, hubRequestOptions: IHubRequestOptions): Promise<any>;
