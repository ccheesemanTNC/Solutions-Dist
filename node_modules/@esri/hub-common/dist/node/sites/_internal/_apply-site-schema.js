"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._applySiteSchema = void 0;
const objects_1 = require("../../objects");
const util_1 = require("../../util");
/**
 * Apply the first schema version to the item
 * @param {Object} model Site Model
 * @private
 */
function _applySiteSchema(model) {
    // if this has already been thru this step... skip it...
    if (objects_1.getProp(model, "item.properties.schemaVersion") >= 1)
        return model;
    const clone = util_1.cloneObject(model);
    // proactively purge old properties
    ["groupId", "title"].forEach((prop) => {
        delete clone.data.values[prop];
    });
    // ensure item.properties
    if (!clone.item.properties) {
        clone.item.properties = {};
    }
    clone.item.properties.schemaVersion = 1;
    // Groups!
    if (clone.data.values.groups && Array.isArray(clone.data.values.groups)) {
        // we have some groups arrays in prod where the contents are a mix of strings and objects.
        // we need to ensure this is just an array of groupIds...
        const groupIds = clone.data.values.groups
            .map((entry) => {
            if (typeof entry === "object") {
                return entry.id;
            }
            else {
                return entry;
            }
        })
            .filter((entry) => !!entry);
        // now assign this back to the groups
        clone.data.values.groups = groupIds;
    }
    return clone;
}
exports._applySiteSchema = _applySiteSchema;
//# sourceMappingURL=_apply-site-schema.js.map