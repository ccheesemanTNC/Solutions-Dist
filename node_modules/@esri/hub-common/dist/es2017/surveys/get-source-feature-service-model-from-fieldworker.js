/* Copyright (c) 2020 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
import { getRelatedItems } from "@esri/arcgis-rest-portal";
/**
 * Fetches a Survey's source Feature Service from a given
 * Fieldworker View ID
 * @param {string} fieldworkerId The Fieldworker View ID
 * @param {IRequestOptions} requestOptions The request options
 * @returns {Promise<IModel>}
 */
export const getSourceFeatureServiceModelFromFieldworker = (fieldworkerId, requestOptions) => {
    return getRelatedItems(Object.assign({ id: fieldworkerId, relationshipType: "Service2Data", direction: "forward" }, requestOptions)).then(({ relatedItems: [featureService] }) => {
        let model;
        if (featureService) {
            model = { item: featureService };
        }
        return model;
    });
};
//# sourceMappingURL=get-source-feature-service-model-from-fieldworker.js.map