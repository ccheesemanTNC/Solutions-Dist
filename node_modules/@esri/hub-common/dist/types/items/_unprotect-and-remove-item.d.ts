import { IUserItemOptions } from "@esri/arcgis-rest-portal";
/**
 * Unprotect and Remove an Item
 * Assumes caller has checked that the curernt user should be able to
 * unprotect and remove the item. Underlying calls are failsafe
 * so a failure to unprotect or temove the item will not reject.
 * @param {IUserItemOptions} userItemOptions id and authentication
 * @private
 */
export declare function _unprotectAndRemoveItem(userItemOptions: IUserItemOptions): Promise<any>;
