import { IUser } from "@esri/arcgis-rest-portal";
/**
 * @private
 *
 * A user can be auto-added if they are part of the requesting user's e-org
 * or c-org and the requesting user has the assignToGroups privilege
 */
export declare function _getAutoAddUsers(users: IUser[], requestingUser: IUser): IUser[];
