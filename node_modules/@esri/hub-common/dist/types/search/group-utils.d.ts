import { ISearchOptions } from "@esri/arcgis-rest-portal";
import { Filter, IGroupFilterDefinition } from ".";
/**
 *
 * Merge `Filter<"group">` objects
 *
 * Useful in components which may get partial filters from a variety of
 * sub-components, which are then combined into a single filter prior
 * to executing the search.
 * @param filters
 * @returns
 */
export declare function mergeGroupFilters(filters: Array<Filter<"group">>): Filter<"group">;
/**
 * Prior to serialization into the query syntax for the backing APIs, we first expand [Filters](../Filter)
 *
 * Filter's can express their intent in a very terse form, but to ensure consistent structures
 * we expand them into their more verbose form.
 *
 * i.e. `title: "Water"` expands into `title: { any: ["Water"]}`
 *
 * - Fields defined as `string | string[] | MatchOptions` will be converted to a `MatchOptions`
 * - RelativeDate fields are converted to DateRange<number>
 *
 * @param filter
 * @returns
 */
export declare function expandGroupFilter(filter: Filter<"group">): IGroupFilterDefinition;
/**
 * @private
 * Serialize an `IGroupFilterDefinition` into an `ISearchOptions` for use
 * with `searchGroups`
 * @param filter
 * @returns
 */
export declare function serializeGroupFilterForPortal(filter: IGroupFilterDefinition): ISearchOptions;
