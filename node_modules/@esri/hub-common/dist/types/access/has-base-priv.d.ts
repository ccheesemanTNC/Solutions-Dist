import { IUser } from "@esri/arcgis-rest-types";
/**
 * Checks for fundamental privilege required by all access checks
 * @param {IUser} user
 * @returns {boolean}
 */
export declare function hasBasePriv(user: IUser): boolean;
