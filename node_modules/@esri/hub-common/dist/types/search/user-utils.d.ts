import { ISearchOptions } from "@esri/arcgis-rest-portal";
import { Filter, IUserFilterDefinition } from "..";
/**
 *
 * Merge `Filter<"user">` objects
 *
 * Useful in components which may get partial filters from a variety of
 * sub-components, which are then combined into a single filter prior
 * to executing the search.
 * @param filters
 * @returns
 */
export declare function mergeUserFilters(filters: Array<Filter<"user">>): Filter<"user">;
/**
 * Prior to serialization into the query syntax for the backing APIs, we first expand [Filters](../Filter)
 *
 * Filter's can express their intent in a very terse form, but to ensure consistent structures
 * we expand them into their more verbose form.
 *
 * i.e. `firstname: "John"` expands into `firstname: { any: ["John"]}`
 *
 * - Fields defined as `string | string[] | MatchOptions` will be converted to a `MatchOptions`
 * - RelativeDate fields are converted to DateRange<number>
 * @param filter
 * @returns
 */
export declare function expandUserFilter(filter: Filter<"user">): IUserFilterDefinition;
/**
 * @private
 * Serialize an `IUserFilterDefinition` into an `ISearchOptions` for use
 * with `searchUsers`
 * @param filter
 * @returns
 */
export declare function serializeUserFilterForPortal(filter: IUserFilterDefinition): ISearchOptions;
