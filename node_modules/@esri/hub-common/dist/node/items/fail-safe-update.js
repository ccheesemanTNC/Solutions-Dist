"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.failSafeUpdate = void 0;
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
const serializeModel_1 = require("../models/serializeModel");
const utils_1 = require("../utils");
/**
 * Update a model's item, wrapped in a failSafe so this will not blow up if
 * the user lacks rights somehow. This should be used in places where there is
 * a high-probability that the current user CAN update the item.
 * @param {Object} model Model object to be updated
 * @param {IRequestOptions} requestOptions
 */
function failSafeUpdate(model, requestOptions) {
    const failSafedUpdate = utils_1.failSafe(arcgis_rest_portal_1.updateItem, {
        id: model.item.id,
        success: true,
    });
    const opts = Object.assign({ item: serializeModel_1.serializeModel(model) }, requestOptions);
    return failSafedUpdate(opts);
}
exports.failSafeUpdate = failSafeUpdate;
//# sourceMappingURL=fail-safe-update.js.map