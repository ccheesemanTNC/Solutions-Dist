import { IUser } from "@esri/arcgis-rest-auth";
import { IAddGroupUsersResult } from "@esri/arcgis-rest-portal";
import { IAuthenticationManager } from "@esri/arcgis-rest-request";
/**
 *
 * Attempts to auto-add users to a group
 *
 * @param {string} id ID of the group the users will be added to
 * @param {IUser[]} users
 * @param {IAuthenticationManager} authentication
 *
 * @returns {IAddGroupUsersResult|null} Result of the transaction (null if no users are passed in)
 */
export declare function autoAddUsers(id: string, users: IUser[], authentication: IAuthenticationManager): Promise<IAddGroupUsersResult>;
