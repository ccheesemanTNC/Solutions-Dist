"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeSolutionTemplateItem = exports.itemPropsNotInTemplates = void 0;
const util_1 = require("../util");
exports.itemPropsNotInTemplates = [
    "id",
    "isOrgItem",
    "proxyFilter",
    "ownerFolder",
    "protected",
    "owner",
    "created",
    "modified",
    "guid",
    "name",
    "access",
    "size",
    "listed",
    "numComments",
    "numRatings",
    "avgRating",
    "numViews",
    "scoreCompleteness",
    "groupDesignations",
    "listed",
    "screenshots",
    "banner",
    "appCategories",
    "industries",
    "languages",
    "largeThumbnail"
];
/**
 * Given an item, remove a standard set of properties not needed in a template
 * TODO: This should land in a templating helper lib in hub.js
 * @param {Object} item Item to be normalized
 */
function normalizeSolutionTemplateItem(item) {
    const template = util_1.cloneObject(item);
    exports.itemPropsNotInTemplates.forEach(prop => {
        delete template[prop];
    });
    // set a bunch of things we do want
    template.extent = "{{organization.defaultExtentBBox}}";
    return template;
}
exports.normalizeSolutionTemplateItem = normalizeSolutionTemplateItem;
//# sourceMappingURL=normalize-solution-template-item.js.map