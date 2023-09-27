"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unshareItemFromGroups = void 0;
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
/**
 * Unshare an item from a set of groups
 * @param {String} itemId Item Id to unshare from groups
 * @param {Array} groups Array of group id's from which the item will be unshared
 * @param {String} owner optional Owner username to determine which endpoint to hit
 * @param {IRequestOptions} requestOptions
 */
function unshareItemFromGroups(itemId, groups, requestOptions, owner) {
    return Promise.all(groups.map((groupId) => {
        const opt = Object.assign({}, { id: itemId, groupId }, requestOptions);
        if (owner) {
            opt.owner = owner;
        }
        return arcgis_rest_portal_1.unshareItemWithGroup(opt);
    }));
}
exports.unshareItemFromGroups = unshareItemFromGroups;
//# sourceMappingURL=unshare-item-from-groups.js.map