"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._unprotectAndRemoveItem = void 0;
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
const utils_1 = require("../utils");
/**
 * Unprotect and Remove an Item
 * Assumes caller has checked that the curernt user should be able to
 * unprotect and remove the item. Underlying calls are failsafe
 * so a failure to unprotect or temove the item will not reject.
 * @param {IUserItemOptions} userItemOptions id and authentication
 * @private
 */
function _unprotectAndRemoveItem(userItemOptions) {
    const failSafeUnprotect = utils_1.failSafe(arcgis_rest_portal_1.unprotectItem, { success: true });
    const failSafeRemove = utils_1.failSafe(arcgis_rest_portal_1.removeItem, { success: true });
    return failSafeUnprotect(userItemOptions).then(() => {
        return failSafeRemove(userItemOptions);
    });
}
exports._unprotectAndRemoveItem = _unprotectAndRemoveItem;
//# sourceMappingURL=_unprotect-and-remove-item.js.map