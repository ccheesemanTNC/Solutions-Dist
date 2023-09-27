import { IModel } from "../types";
/**
 * To streamline passing of either a model id or the model itself, we use this function
 * to extract the model or fetch it, and return it. It uses `failSafe` and if the item
 * is not accessible for whatever reason, will return a model-ish object with `isMissing: true`
 * It is up to the caller to take approriate action
 * @param {String} modelType the type of model to extract from the options hash
 * @param {Object} options Something that extends IRequestOptions
 */
export declare function getModelFromOptions(modelType: string, options: Record<string, any>): Promise<IModel>;
