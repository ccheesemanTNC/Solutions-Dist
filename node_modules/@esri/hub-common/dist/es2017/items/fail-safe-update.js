import { updateItem } from "@esri/arcgis-rest-portal";
import { serializeModel } from "../models/serializeModel";
import { failSafe } from "../utils";
/**
 * Update a model's item, wrapped in a failSafe so this will not blow up if
 * the user lacks rights somehow. This should be used in places where there is
 * a high-probability that the current user CAN update the item.
 * @param {Object} model Model object to be updated
 * @param {IRequestOptions} requestOptions
 */
export function failSafeUpdate(model, requestOptions) {
    const failSafedUpdate = failSafe(updateItem, {
        id: model.item.id,
        success: true,
    });
    const opts = Object.assign({ item: serializeModel(model) }, requestOptions);
    return failSafedUpdate(opts);
}
//# sourceMappingURL=fail-safe-update.js.map