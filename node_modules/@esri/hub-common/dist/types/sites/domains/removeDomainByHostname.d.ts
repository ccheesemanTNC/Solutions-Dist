import { IHubRequestOptions } from "../../types";
/**
 * Remove an entry from the domain service, based on a hostname
 *
 * Callers must ensure the user is a member of the org that
 * owns the domain entry else the call will fail.
 * @param hostname
 * @param hubRequestOptions
 */
export declare function removeDomainByHostname(hostname: string, hubRequestOptions: IHubRequestOptions): Promise<void>;
