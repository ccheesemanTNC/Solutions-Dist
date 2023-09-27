import { unprotectItem, removeItem } from "@esri/arcgis-rest-portal";
import { failSafe } from "../utils";
/**
 * Unprotect and Remove an Item
 * Assumes caller has checked that the curernt user should be able to
 * unprotect and remove the item. Underlying calls are failsafe
 * so a failure to unprotect or temove the item will not reject.
 * @param {IUserItemOptions} userItemOptions id and authentication
 * @private
 */
export function _unprotectAndRemoveItem(userItemOptions) {
    const failSafeUnprotect = failSafe(unprotectItem, { success: true });
    const failSafeRemove = failSafe(removeItem, { success: true });
    return failSafeUnprotect(userItemOptions).then(() => {
        return failSafeRemove(userItemOptions);
    });
}
//# sourceMappingURL=_unprotect-and-remove-item.js.map