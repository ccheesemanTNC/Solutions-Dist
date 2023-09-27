import { IRequestOptions } from "@esri/arcgis-rest-request";
import { IItem } from "@esri/arcgis-rest-portal";
import { IGetSurveyModelsResponse } from "../types";
/**
 * Builds a dictionary of Survey items for the given Form model
 * @param {string} formId The Form ID of the survey
 * @param {IRequestOptions} requestOptions The request options
 * @returns {Promise<IGetSurveyModelsResponse>}
 */
export declare const getSurveyModels: (formItemOrId: string | IItem, requestOptions: IRequestOptions) => Promise<IGetSurveyModelsResponse>;
