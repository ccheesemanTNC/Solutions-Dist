import { IRequestOptions } from "@esri/arcgis-rest-request";
import { IModel } from "../types";
/**
 * Given a model, determine if it is protected, and unprotect it if it is.
 * Otherwise, just resolve with the same result.
 * @param {Object} model Model Object
 * @param {IRequestOptions} requestOptions
 */
export declare function unprotectModel(model: IModel, requestOptions: IRequestOptions): Promise<{
    success: boolean;
}>;
