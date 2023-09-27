import { IHubRequestOptions } from "../../types";
/**
 * Ensure a unique domain name by checking for and incrementing
 * a subdomain
 * @param {String} subdomain Subdomain to ensure is unique
 * @param {IHubRequestOptions} hubRequestOptions
 * @param {*} step Step number
 */
export declare function getUniqueDomainNamePortal(subdomain: string, hubRequestOptions: IHubRequestOptions, step?: number): Promise<string>;
