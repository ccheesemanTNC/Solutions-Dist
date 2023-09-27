import { IItem } from "@esri/arcgis-rest-portal";
import { IItemEnrichments, IServerEnrichments } from "../core";
import { IEnrichmentErrorInfo, IHubRequestOptions } from "../types";
/**
 * An object containing the item and fetched enrichments
 */
export interface IItemAndEnrichments extends IItemEnrichments, IServerEnrichments {
    item: IItem;
}
/**
 * The name of an enrichment that comes either
 * from the portal API for the item
 * or from the server that the item points to
 */
export declare type ItemOrServerEnrichment = keyof IItemEnrichments | keyof IServerEnrichments;
/**
 * convert an error to an enrichment error info format
 * and optionally append it to an existing array of those
 * @param error
 * @param errors an array of existing enrichment error info
 * @returns a new array of enrichment error info
 * @private
 */
export declare const getEnrichmentErrors: (error: Error | string, errors?: IEnrichmentErrorInfo[]) => IEnrichmentErrorInfo[];
/**
 * Fetch enrichments for an item
 * @param item
 * @param enrichments the list of enrichments to fetch
 * @param requestOptions
 * @returns an object with the item and enrichments
 * @private
 */
export declare const fetchItemEnrichments: (item: IItem, enrichments: ItemOrServerEnrichment[], requestOptions?: IHubRequestOptions) => Promise<IItemAndEnrichments>;
