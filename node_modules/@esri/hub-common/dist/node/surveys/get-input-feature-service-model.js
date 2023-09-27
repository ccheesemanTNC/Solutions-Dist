"use strict";
/* Copyright (c) 2020 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInputFeatureServiceModel = void 0;
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
/**
 * Gets the primary input Feature Service for the given
 * Form ID. This will be the Fieldworker view, if it exists,
 * otherwise the source Feature Service.
 * @param {string} formId The Form ID
 * @param requestOptions The request options
 * @returns {Promise<IModel>}
 */
exports.getInputFeatureServiceModel = (formId, requestOptions) => {
    return arcgis_rest_portal_1.getRelatedItems(Object.assign({ id: formId, relationshipType: "Survey2Service", direction: "forward" }, requestOptions)).then(({ relatedItems: [featureService] }) => {
        let model;
        if (featureService) {
            model = { item: featureService };
        }
        return model;
    });
};
//# sourceMappingURL=get-input-feature-service-model.js.map