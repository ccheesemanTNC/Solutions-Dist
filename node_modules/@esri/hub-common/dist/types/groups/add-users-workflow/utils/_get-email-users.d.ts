import { IUser } from "@esri/arcgis-rest-auth";
/**
 * @private
 *
 * A user can be emailed if they are invited (not auto-added)
 * and the _canEmailUser condition is met
 */
export declare function _getEmailUsers(users: IUser[], requestingUser: IUser, includeSelf?: boolean): IUser[];
