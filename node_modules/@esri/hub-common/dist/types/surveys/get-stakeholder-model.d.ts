import { IRequestOptions } from "@esri/arcgis-rest-request";
import { IModel } from "../types";
/**
 * Fetches a Survey's Stakeholder View for a given
 * Form ID
 * @param {string} formId A Form ID
 * @param {IRequestOptions} requestOptions The request options
 * @returns {Promise<IModel>}
 */
export declare const getStakeholderModel: (formId: string, requestOptions: IRequestOptions) => Promise<IModel>;
