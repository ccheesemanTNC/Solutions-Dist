import { IUser } from "@esri/arcgis-rest-auth";
/**
 * @private
 *
 * returns whether or not the users are in the same org
 */
export declare function _canEmailUser(recipient: IUser, sender: IUser): boolean;
