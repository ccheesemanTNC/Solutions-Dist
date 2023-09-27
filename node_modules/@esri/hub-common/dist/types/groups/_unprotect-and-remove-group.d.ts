import { IUserGroupOptions } from "@esri/arcgis-rest-portal";
/**
 * Unprotect and Remove a Group.
 * Assumed caller has checked that the current user should be able
 * to unprotect and remove the group. Underlying calls are failsafe
 * so a failure to unprotect or remove the group will not reject
 * @param {IUserGroupOptions} userGroupOptions id and authentication
 * @private
 */
export declare function _unprotectAndRemoveGroup(userGroupOptions: IUserGroupOptions): Promise<any>;
