"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shareItemToGroups = void 0;
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
/**
 * Share an item to a set of groups
 * @param {String} itemId Iten Id to share to the groups
 * @param {Array} groups Array of group id's to which the item will be shared
 * @param {String} owner optional Owner username to determine which endpoint to hit
 * @param {*} requestOptions
 */
function shareItemToGroups(itemId, groups, requestOptions, owner) {
    return Promise.all(groups.map((groupId) => {
        const opt = Object.assign({}, { id: itemId, groupId }, requestOptions);
        if (owner) {
            opt.owner = owner;
        }
        return arcgis_rest_portal_1.shareItemWithGroup(opt);
    }));
}
exports.shareItemToGroups = shareItemToGroups;
//# sourceMappingURL=share-item-to-groups.js.map