import { unprotectItem } from "@esri/arcgis-rest-portal";
/**
 * Given a model, determine if it is protected, and unprotect it if it is.
 * Otherwise, just resolve with the same result.
 * @param {Object} model Model Object
 * @param {IRequestOptions} requestOptions
 */
export function unprotectModel(model, requestOptions) {
    if (model.item.protected) {
        const opts = Object.assign({ id: model.item.id }, requestOptions);
        return unprotectItem(opts);
    }
    else {
        // act as though we did it
        return Promise.resolve({ success: true });
    }
}
//# sourceMappingURL=unprotect-model.js.map