import { searchItems } from "@esri/arcgis-rest-portal";
/**
 * Check if a site/page exists with a specific name
 */
export function doesItemExistWithTitle(itemTitle, options, authMgr) {
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
    return searchItems(opts)
        .then(searchResponse => searchResponse.results.length > 0)
        .catch(e => {
        throw Error(`Error in doesItemExistWithTitle ${e}`);
    });
}
//# sourceMappingURL=does-item-exist-with-title.js.map