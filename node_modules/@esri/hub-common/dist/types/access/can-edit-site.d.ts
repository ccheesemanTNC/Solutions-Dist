import { IItem, IUser } from "@esri/arcgis-rest-types";
/**
 * Checks if user has access to edit site in Hub
 * Currently, Hub Home sites are not editable
 * In initiative context, check is delegated to canEditItem for the initiative site item
 * @param {IItem} model
 * @param {IUser} user
 * @returns {boolean}
 */
export declare function canEditSite(model: IItem, user: IUser): boolean;
