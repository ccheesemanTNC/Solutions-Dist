import { IItem, IUser } from "@esri/arcgis-rest-types";
/**
 * Checks if user has access to edit an item in Hub
 * @param {IItem} item
 * @param {IUser} user
 * @returns {boolean}
 */
export declare function canEditItem(item: IItem, user: IUser): boolean;
