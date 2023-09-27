import { IRequestOptions } from "@esri/arcgis-rest-request";
import { IModel } from "../types";
/**
 * Gets the primary input Feature Service for the given
 * Form ID. This will be the Fieldworker view, if it exists,
 * otherwise the source Feature Service.
 * @param {string} formId The Form ID
 * @param requestOptions The request options
 * @returns {Promise<IModel>}
 */
export declare const getInputFeatureServiceModel: (formId: string, requestOptions: IRequestOptions) => Promise<IModel>;
