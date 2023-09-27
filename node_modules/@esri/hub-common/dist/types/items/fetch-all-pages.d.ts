import { ISearchOptions } from "@esri/arcgis-rest-portal";
import { SearchableType, SearchFunction } from "../types";
/**
 * Fetches all the pages in a search request
 * @param {SearchFunction} searchFunc
 * @param {ISearchOptions} opts
 * @param {number} limit
 * @param {batchSize} number of concurrent requests at a time
 * @returns {Promise<SearchableType[]>}
 */
export declare function fetchAllPages(searchFunc: SearchFunction, opts: ISearchOptions, limit?: number, batchSize?: number): Promise<SearchableType[]>;
