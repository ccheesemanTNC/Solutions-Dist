import { IItem, IUser } from "@esri/arcgis-rest-types";
export declare const REQUIRED_PRIVS: string[];
/**
 * Checks if user has access to content library in Hub
 * In Hub Home context, user access requires additional privileges
 * In initiative context, check is delegated to canEditItem for the initiative site item
 * @param {IItem} item
 * @param {IUser} user
 * @returns {boolean}
 */
export declare function canEditSiteContent(item: IItem, user: IUser): boolean;
