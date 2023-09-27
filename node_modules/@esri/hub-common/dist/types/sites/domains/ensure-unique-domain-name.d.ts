import { IHubRequestOptions } from "../../types";
/**
 * Given a subdomain, ensure that we have a unique hostname
 * incrementing if needed
 * @param {String} subdomain Subdomain to unique-ify
 * @param {IHubRequestOptions} hubRequestOptions
 */
export declare function ensureUniqueDomainName(subdomain: string, hubRequestOptions: IHubRequestOptions): Promise<string>;
