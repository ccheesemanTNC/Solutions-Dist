import { __awaiter, __generator } from "tslib";
import { searchItems } from "@esri/arcgis-rest-portal";
import { expandApi, getNextFunction } from "../../search/utils";
import { convertPortalResponseToFacets, expandContentFilter, serializeContentFilterForPortal, } from "../../search/content-utils";
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
export function searchContentEntities(filter, convertFn, options) {
    var _a, _b;
    // expand filter so we can serialize to either api
    var expanded = expandContentFilter(filter);
    var searchOptions = serializeContentFilterForPortal(expanded);
    // DEPRECATION
    /* istanbul ignore next */
    if ((_a = options.aggregations) === null || _a === void 0 ? void 0 : _a.length) {
        // tslint:disable-next-line:no-console
        console.warn("IHubSearchOptions.aggregations is deprecated. Please use .aggFields instead.");
        searchOptions.countFields = options.aggregations.join(",");
        searchOptions.countSize = options.aggLimit || 10;
    }
    // Aggregations
    if ((_b = options.aggFields) === null || _b === void 0 ? void 0 : _b.length) {
        searchOptions.countFields = options.aggFields.join(",");
        searchOptions.countSize = options.aggLimit || 10;
    }
    // properties to copy from IHubSearchOptions to the ISearchOptions
    var props = [
        "authentication",
        "num",
        "sortField",
        "sortOrder",
        "site",
        "start",
    ];
    // Include "start" here
    // copy the props over
    props.forEach(function (prop) {
        if (options.hasOwnProperty(prop)) {
            searchOptions[prop] = options[prop];
        }
    });
    // create the entitySearchFn
    var searchFn = createContentEntitySearchFn(convertFn);
    // execute the search
    // Add ArcGIS API
    if (options.api && !options.authentication) {
        var expandedApi = expandApi(options.api);
        searchOptions.portal = expandedApi.url;
    }
    return searchFn(searchOptions);
}
/**
 * Return a function that holds a closure containing
 * a hub entity specific conversion function. This
 * allows the `.next()` function to use the function on
 * subsequent calls
 * @param convertFn
 * @returns
 */
export function createContentEntitySearchFn(convertFn) {
    // Return a function that does the search, with a closure over the
    // conversion function. Naming this function is important as it's
    // referenced in the `next` section below
    return function searchEntities(searchOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var response, entities, facets;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, searchItems(searchOptions)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, Promise.all(response.results.map(function (itm) {
                                return convertFn(itm, searchOptions);
                            }))];
                    case 2:
                        entities = _a.sent();
                        facets = convertPortalResponseToFacets(response);
                        return [2 /*return*/, {
                                total: response.total,
                                results: entities,
                                facets: facets,
                                hasNext: response.nextStart > -1,
                                next: getNextFunction(searchOptions, response.nextStart, response.total, searchEntities),
                            }];
                }
            });
        });
    };
}
//# sourceMappingURL=searchContentEntities.js.map