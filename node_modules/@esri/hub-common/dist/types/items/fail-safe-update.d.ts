import { IModel } from "../types";
import { IUserRequestOptions } from "@esri/arcgis-rest-auth";
/**
 * Update a model's item, wrapped in a failSafe so this will not blow up if
 * the user lacks rights somehow. This should be used in places where there is
 * a high-probability that the current user CAN update the item.
 * @param {Object} model Model object to be updated
 * @param {IRequestOptions} requestOptions
 */
export declare function failSafeUpdate(model: IModel, requestOptions: IUserRequestOptions): Promise<any>;
