"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doesItemExistWithTitle = void 0;
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
/**
 * Check if a site/page exists with a specific name
 */
function doesItemExistWithTitle(itemTitle, options, authMgr) {
    // if options have multiple properties, put them into one string separated with 'AND'
    const optionsQuery = Object.keys(options)
        .map(key => {
        return `${key}:"${options[key]}"`;
    })
        .join(" AND ");
    const opts = {
        q: `title:"${itemTitle}" AND ${optionsQuery}`,
        authentication: authMgr
    };
    return arcgis_rest_portal_1.searchItems(opts)
        .then(searchResponse => searchResponse.results.length > 0)
        .catch(e => {
        throw Error(`Error in doesItemExistWithTitle ${e}`);
    });
}
exports.doesItemExistWithTitle = doesItemExistWithTitle;
//# sourceMappingURL=does-item-exist-with-title.js.map