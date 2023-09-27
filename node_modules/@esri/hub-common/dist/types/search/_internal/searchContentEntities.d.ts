import { ISearchOptions } from "@esri/arcgis-rest-portal";
import { IRequestOptions } from "@esri/arcgis-rest-request";
import { IItem } from "@esri/arcgis-rest-types";
import { ISearchResponse } from "../../types";
import { Filter, IHubSearchOptions } from "../types";
/**
 * Definition of `convertItemTo<T>` functions
 */
export declare type ItemToEntityFunction<T> = (i: IItem, ro?: IRequestOptions) => Promise<T>;
/**
 * Generic search that returns Hub Entity types converted from items
 * by the passed in `ItemToEntityFunction`
 *
 * This abstraction is used to ensure that searching from any of the
 * entity managers / modules is consistent, and returns the entity
 * types, instead of `IItem` or `IHubContent`
 *
 * @param filter
 * @param convertFn
 * @param options
 * @returns
 */
export declare function searchContentEntities<T>(filter: Filter<"content">, convertFn: ItemToEntityFunction<T>, options: IHubSearchOptions): Promise<ISearchResponse<T>>;
/**
 * Return a function that holds a closure containing
 * a hub entity specific conversion function. This
 * allows the `.next()` function to use the function on
 * subsequent calls
 * @param convertFn
 * @returns
 */
export declare function createContentEntitySearchFn<T>(convertFn: ItemToEntityFunction<T>): (v: ISearchOptions) => Promise<ISearchResponse<T>>;
