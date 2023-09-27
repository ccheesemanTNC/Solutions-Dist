export * from "./serializeModel";
import { createItem, getItem, getItemData, updateItem, } from "@esri/arcgis-rest-portal";
import { cloneObject, getItemBySlug } from "..";
/**
 * Gets the full item/data model for an item id
 * @param {string} id
 * @param {Object} requestOptions
 */
export function getModel(id, requestOptions) {
    return Promise.all([
        getItem(id, requestOptions),
        getItemData(id, requestOptions),
    ]).then((result) => {
        // shape this into a model
        return {
            item: result[0],
            data: result[1],
        };
    });
}
/**
 * Get a model by it's slug
 *
 * This uses the [Filter](https://developers.arcgis.com/rest/users-groups-and-items/search-reference.htm) option of the
 * to search for an item that has a typekeyword of `slug|{slug-value}`
 *
 * This is useful for applications that want to use human-readable urls instead
 * of using item ids.
 *
 * @param slug
 * @param requestOptions
 * @returns
 */
export function getModelBySlug(slug, requestOptions) {
    return getItemBySlug(slug, requestOptions)
        .then((item) => {
        const prms = [Promise.resolve(item)];
        if (item) {
            prms.push(getItemData(item.id, requestOptions));
        }
        else {
            prms.push(Promise.resolve(null));
        }
        return Promise.all(prms);
    })
        .then((result) => {
        if (result[0]) {
            return {
                item: result[0],
                data: result[1],
            };
        }
        else {
            return null;
        }
    });
}
/**
 * Create an item to back and IModel.
 *
 * @param {IModel}
 * @param {IRequestOptions} requestOptions
 * @returns {Promise<IModel>}
 */
export function createModel(model, requestOptions) {
    const clone = cloneObject(model);
    const item = cloneObject(model.item);
    item.data = cloneObject(model.data);
    const opts = Object.assign({ item }, requestOptions);
    return createItem(opts).then((response) => {
        clone.item.id = response.id;
        clone.item.created = new Date().getTime();
        clone.item.modified = clone.item.created;
        return clone;
    });
}
/**
 * Update an IModel. Generic function that will be used across all
 * type-specific update functions
 *
 * @export
 * @param {IModel} "model" object (i.e. `{item:{...}, data:{...}}`)
 * @param {IRequestOptions} requestOptions
 * @returns {Promise<IModel>}
 */
export function updateModel(model, requestOptions) {
    const clone = cloneObject(model);
    const item = cloneObject(model.item);
    item.data = cloneObject(model.data);
    const opts = Object.assign({ item }, requestOptions);
    return updateItem(opts).then(() => {
        // update the modified prop
        // this won't be exact, but it will be very close
        clone.item.modified = new Date().getTime();
        return clone;
    });
}
/**
 * Given an Item, fetch the data json and return an IModel
 * @param item
 * @param requestOptions
 * @returns
 */
export async function fetchModelFromItem(item, requestOptions) {
    const data = await getItemData(item.id, requestOptions);
    return {
        item,
        data,
    };
}
//# sourceMappingURL=index.js.map