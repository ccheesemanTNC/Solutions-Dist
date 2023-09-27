"use strict";
/* Copyright (c) 2020 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceFeatureServiceModelFromFieldworker = void 0;
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
/**
 * Fetches a Survey's source Feature Service from a given
 * Fieldworker View ID
 * @param {string} fieldworkerId The Fieldworker View ID
 * @param {IRequestOptions} requestOptions The request options
 * @returns {Promise<IModel>}
 */
exports.getSourceFeatureServiceModelFromFieldworker = (fieldworkerId, requestOptions) => {
    return arcgis_rest_portal_1.getRelatedItems(Object.assign({ id: fieldworkerId, relationshipType: "Service2Data", direction: "forward" }, requestOptions)).then(({ relatedItems: [featureService] }) => {
        let model;
        if (featureService) {
            model = { item: featureService };
        }
        return model;
    });
};
//# sourceMappingURL=get-source-feature-service-model-from-fieldworker.js.map