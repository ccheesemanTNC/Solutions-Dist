import { IHubRequestOptions } from "../../types";
/**
 * Ensure a unique domain name by checking for and incrementing
 * a subdomain
 * @param {String} subdomain Subdomain to ensure is unique
 * @param {String} baseHostname base hostname
 * @param hubRequestOptions
 * @param {Number} step Step number
 */
export declare function getUniqueDomainName(subdomain: string, baseHostname: string, hubRequestOptions: IHubRequestOptions, step?: number): Promise<string>;
