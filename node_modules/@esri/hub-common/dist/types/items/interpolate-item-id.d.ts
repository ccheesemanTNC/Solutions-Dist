import { IModelTemplate } from "../types";
/**
 * Interpolate the item id back into any  {{appid}} instances
 * in the item. Allows for self-referencing in templates
 * @param {object} model Item Model
 */
export declare function interpolateItemId(model: IModelTemplate | any): IModelTemplate | any;
