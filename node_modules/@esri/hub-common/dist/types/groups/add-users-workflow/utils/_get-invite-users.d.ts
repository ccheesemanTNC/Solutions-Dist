import { IUser } from "@esri/arcgis-rest-auth";
/**
 * @private
 *
 * A user will be invited if they cannot be auto-added
 */
export declare function _getInviteUsers(users: IUser[], requestingUser: IUser): IUser[];
