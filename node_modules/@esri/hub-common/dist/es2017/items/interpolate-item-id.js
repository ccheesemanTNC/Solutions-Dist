import { interpolate } from "./interpolate";
/**
 * Interpolate the item id back into any  {{appid}} instances
 * in the item. Allows for self-referencing in templates
 * @param {object} model Item Model
 */
export function interpolateItemId(model) {
    const settings = { item: { id: model.item.id }, appid: model.item.id };
    const transforms = {
        toISO(_, v) {
            return v;
        }
    };
    return interpolate(model, settings, transforms);
}
//# sourceMappingURL=interpolate-item-id.js.map