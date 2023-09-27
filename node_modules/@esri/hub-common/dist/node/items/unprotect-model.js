"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unprotectModel = void 0;
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
/**
 * Given a model, determine if it is protected, and unprotect it if it is.
 * Otherwise, just resolve with the same result.
 * @param {Object} model Model Object
 * @param {IRequestOptions} requestOptions
 */
function unprotectModel(model, requestOptions) {
    if (model.item.protected) {
        const opts = Object.assign({ id: model.item.id }, requestOptions);
        return arcgis_rest_portal_1.unprotectItem(opts);
    }
    else {
        // act as though we did it
        return Promise.resolve({ success: true });
    }
}
exports.unprotectModel = unprotectModel;
//# sourceMappingURL=unprotect-model.js.map