/* Copyright (c) 2020 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
import { getItem } from "@esri/arcgis-rest-portal";
import { getInputFeatureServiceModel } from "./get-input-feature-service-model";
import { getSourceFeatureServiceModelFromFieldworker } from "./get-source-feature-service-model-from-fieldworker";
import { getStakeholderModel } from "./get-stakeholder-model";
import { isFieldworkerView } from "./is-fieldworker-view";
/**
 * Builds a dictionary of Survey items for the given Form model
 * @param {string} formId The Form ID of the survey
 * @param {IRequestOptions} requestOptions The request options
 * @returns {Promise<IGetSurveyModelsResponse>}
 */
export const getSurveyModels = (formItemOrId, requestOptions) => {
    let fieldworker;
    let stakeholder;
    const getForm = () => typeof formItemOrId === "string"
        ? getItem(formItemOrId, requestOptions)
        : Promise.resolve(formItemOrId);
    return getForm().then((form) => {
        const promises = [
            // the primary input will be the fieldworker (if it exists), otherwise
            // the source feature service.
            getInputFeatureServiceModel(form.id, requestOptions),
            getStakeholderModel(form.id, requestOptions),
        ];
        return Promise.all(promises)
            .then(([featureServiceOrFieldworkerModelResult, stakeholderResult]) => {
            stakeholder = stakeholderResult;
            if (featureServiceOrFieldworkerModelResult &&
                isFieldworkerView(featureServiceOrFieldworkerModelResult.item)) {
                fieldworker = featureServiceOrFieldworkerModelResult;
                // if the primary input is the fieldworker, fetch
                // the source feature service
                return getSourceFeatureServiceModelFromFieldworker(fieldworker.item.id, requestOptions);
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