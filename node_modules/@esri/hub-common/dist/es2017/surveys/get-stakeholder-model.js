/* Copyright (c) 2020 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
import { getRelatedItems } from "@esri/arcgis-rest-portal";
/**
 * Fetches a Survey's Stakeholder View for a given
 * Form ID
 * @param {string} formId A Form ID
 * @param {IRequestOptions} requestOptions The request options
 * @returns {Promise<IModel>}
 */
export const getStakeholderModel = (formId, requestOptions) => {
    return getRelatedItems(Object.assign({ id: formId, relationshipType: "Survey2Data", direction: "forward" }, requestOptions)).then(({ relatedItems: [stakeholderView] }) => {
        let model;
        if (stakeholderView) {
            model = { item: stakeholderView };
        }
        return model;
    });
};
//# sourceMappingURL=get-stakeholder-model.js.map