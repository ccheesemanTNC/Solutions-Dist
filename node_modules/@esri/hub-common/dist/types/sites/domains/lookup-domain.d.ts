import { IHubRequestOptions, IDomainEntry } from "../../types";
/**
 * Fetch a the information about a domain.
 * Different implementation for Portal vs AGO
 * @param {string} hostname of domain record to locate
 * @param {IHubRequestOptions} hubRequestOptions
 */
export declare function lookupDomain(hostname: string, hubRequestOptions: IHubRequestOptions): Promise<IDomainEntry | {
    hostname: string;
    siteId: string;
}>;
