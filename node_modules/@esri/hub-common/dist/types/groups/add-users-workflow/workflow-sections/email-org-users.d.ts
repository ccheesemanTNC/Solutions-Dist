import { IUser } from "@esri/arcgis-rest-auth";
import { ICreateOrgNotificationResult } from "@esri/arcgis-rest-portal";
import { IAuthenticationManager } from "@esri/arcgis-rest-request";
import { IEmail } from "../interfaces";
/**
 * Attempts to email members of the requesting user's organization.
 *
 * @param {IUser[]} users Users to email (must be in the same org as the requesting user)
 * @param {IEmail} email
 * @param {IAuthenticationManager} authentication
 * @param {boolean} isOrgAdmin // Whether the requesting user in an org admin
 *
 * @returns {object|null} A promise that resolves to the result of the transaction (null if no users are passed in)
 */
export declare function emailOrgUsers(users: IUser[], email: IEmail, authentication: IAuthenticationManager, isOrgAdmin: boolean): Promise<ICreateOrgNotificationResult>;
