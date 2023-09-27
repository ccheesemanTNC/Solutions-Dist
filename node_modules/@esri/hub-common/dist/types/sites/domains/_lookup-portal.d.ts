import { IRequestOptions } from "@esri/arcgis-rest-request";
/**
 * Lookup a domain in Portal
 * @param {string} hostname to locate the site for
 * @param {IRequestOptions} requestOptions
 * @private
 */
export declare function _lookupPortal(hostname: string, requestOptions: IRequestOptions): Promise<{
    hostname: string;
    siteId: string;
}>;
