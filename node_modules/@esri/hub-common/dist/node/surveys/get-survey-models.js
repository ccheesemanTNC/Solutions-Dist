"use strict";
/* Copyright (c) 2020 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSurveyModels = void 0;
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
const get_input_feature_service_model_1 = require("./get-input-feature-service-model");
const get_source_feature_service_model_from_fieldworker_1 = require("./get-source-feature-service-model-from-fieldworker");
const get_stakeholder_model_1 = require("./get-stakeholder-model");
const is_fieldworker_view_1 = require("./is-fieldworker-view");
/**
 * Builds a dictionary of Survey items for the given Form model
 * @param {string} formId The Form ID of the survey
 * @param {IRequestOptions} requestOptions The request options
 * @returns {Promise<IGetSurveyModelsResponse>}
 */
exports.getSurveyModels = (formItemOrId, requestOptions) => {
    let fieldworker;
    let stakeholder;
    const getForm = () => typeof formItemOrId === "string"
        ? arcgis_rest_portal_1.getItem(formItemOrId, requestOptions)
        : Promise.resolve(formItemOrId);
    return getForm().then((form) => {
        const promises = [
            // the primary input will be the fieldworker (if it exists), otherwise
            // the source feature service.
            get_input_feature_service_model_1.getInputFeatureServiceModel(form.id, requestOptions),
            get_stakeholder_model_1.getStakeholderModel(form.id, requestOptions),
        ];
        return Promise.all(promises)
            .then(([featureServiceOrFieldworkerModelResult, stakeholderResult]) => {
            stakeholder = stakeholderResult;
            if (featureServiceOrFieldworkerModelResult &&
                is_fieldworker_view_1.isFieldworkerView(featureServiceOrFieldworkerModelResult.item)) {
                fieldworker = featureServiceOrFieldworkerModelResult;
                // if the primary input is the fieldworker, fetch
                // the source feature service
                return get_source_feature_service_model_from_fieldworker_1.getSourceFeatureServiceModelFromFieldworker(fieldworker.item.id, requestOptions);
            }
            else {
                return featureServiceOrFieldworkerModelResult;
            }
        })
            .then((featureService) => {
            return {
                form: { item: form },
                featureService,
                fieldworker,
                stakeholder,
            };
        });
    });
};
//# sourceMappingURL=get-survey-models.js.map