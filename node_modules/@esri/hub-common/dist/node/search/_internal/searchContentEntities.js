"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContentEntitySearchFn = exports.searchContentEntities = void 0;
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
const utils_1 = require("../../search/utils");
const content_utils_1 = require("../../search/content-utils");
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
function searchContentEntities(filter, convertFn, options) {
    var _a, _b;
    // expand filter so we can serialize to either api
    const expanded = content_utils_1.expandContentFilter(filter);
    const searchOptions = content_utils_1.serializeContentFilterForPortal(expanded);
    // DEPRECATION
    /* istanbul ignore next */
    if ((_a = options.aggregations) === null || _a === void 0 ? void 0 : _a.length) {
        // tslint:disable-next-line:no-console
        console.warn(`IHubSearchOptions.aggregations is deprecated. Please use .aggFields instead.`);
        searchOptions.countFields = options.aggregations.join(",");
        searchOptions.countSize = options.aggLimit || 10;
    }
    // Aggregations
    if ((_b = options.aggFields) === null || _b === void 0 ? void 0 : _b.length) {
        searchOptions.countFields = options.aggFields.join(",");
        searchOptions.countSize = options.aggLimit || 10;
    }
    // properties to copy from IHubSearchOptions to the ISearchOptions
    const props = [
        "authentication",
        "num",
        "sortField",
        "sortOrder",
        "site",
        "start",
    ];
    // Include "start" here
    // copy the props over
    props.forEach((prop) => {
        if (options.hasOwnProperty(prop)) {
            searchOptions[prop] = options[prop];
        }
    });
    // create the entitySearchFn
    const searchFn = createContentEntitySearchFn(convertFn);
    // execute the search
    // Add ArcGIS API
    if (options.api && !options.authentication) {
        const expandedApi = utils_1.expandApi(options.api);
        searchOptions.portal = expandedApi.url;
    }
    return searchFn(searchOptions);
}
exports.searchContentEntities = searchContentEntities;
/**
 * Return a function that holds a closure containing
 * a hub entity specific conversion function. This
 * allows the `.next()` function to use the function on
 * subsequent calls
 * @param convertFn
 * @returns
 */
function createContentEntitySearchFn(convertFn) {
    // Return a function that does the search, with a closure over the
    // conversion function. Naming this function is important as it's
    // referenced in the `next` section below
    return async function searchEntities(searchOptions) {
        const response = await arcgis_rest_portal_1.searchItems(searchOptions);
        const entities = await Promise.all(response.results.map((itm) => {
            return convertFn(itm, searchOptions);
        }));
        // convert aggregations into facets
        const facets = content_utils_1.convertPortalResponseToFacets(response);
        return {
            total: response.total,
            results: entities,
            facets,
            hasNext: response.nextStart > -1,
            next: utils_1.getNextFunction(searchOptions, response.nextStart, response.total, searchEntities),
        };
    };
}
exports.createContentEntitySearchFn = createContentEntitySearchFn;
//# sourceMappingURL=searchContentEntities.js.map