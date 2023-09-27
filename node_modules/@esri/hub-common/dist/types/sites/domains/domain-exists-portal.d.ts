import { IHubRequestOptions } from "../../types";
/**
 * Check if an item exists with the specified domain keyword
 * @param {String} hostname to check for
 * @param {IHubRequestOptions} hubRequestOptions
 */
export declare function domainExistsPortal(hostname: string, hubRequestOptions: IHubRequestOptions): Promise<boolean>;
