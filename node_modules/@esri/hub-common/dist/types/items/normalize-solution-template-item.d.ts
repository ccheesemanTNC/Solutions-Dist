import { IItem } from "@esri/arcgis-rest-types";
import { IItemTemplate } from "../types";
export declare const itemPropsNotInTemplates: string[];
/**
 * Given an item, remove a standard set of properties not needed in a template
 * TODO: This should land in a templating helper lib in hub.js
 * @param {Object} item Item to be normalized
 */
export declare function normalizeSolutionTemplateItem(item: IItem): IItemTemplate;
