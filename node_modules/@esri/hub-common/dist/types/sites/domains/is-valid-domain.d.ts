import { IHubRequestOptions } from "../../types";
/**
 * Validate a custom domain
 * @param {string} hostname to validate
 * @param {IHubRequestOptions} hubRequestOptions
 */
export declare function isValidDomain(hostname: string, hubRequestOptions: IHubRequestOptions): Promise<any>;
