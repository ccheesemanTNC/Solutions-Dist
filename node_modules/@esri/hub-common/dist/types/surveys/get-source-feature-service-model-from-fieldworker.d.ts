import { IRequestOptions } from "@esri/arcgis-rest-request";
import { IModel } from "../types";
/**
 * Fetches a Survey's source Feature Service from a given
 * Fieldworker View ID
 * @param {string} fieldworkerId The Fieldworker View ID
 * @param {IRequestOptions} requestOptions The request options
 * @returns {Promise<IModel>}
 */
export declare const getSourceFeatureServiceModelFromFieldworker: (fieldworkerId: string, requestOptions: IRequestOptions) => Promise<IModel>;
