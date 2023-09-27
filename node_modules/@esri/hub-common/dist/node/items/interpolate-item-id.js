"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interpolateItemId = void 0;
const interpolate_1 = require("./interpolate");
/**
 * Interpolate the item id back into any  {{appid}} instances
 * in the item. Allows for self-referencing in templates
 * @param {object} model Item Model
 */
function interpolateItemId(model) {
    const settings = { item: { id: model.item.id }, appid: model.item.id };
    const transforms = {
        toISO(_, v) {
            return v;
        }
    };
    return interpolate_1.interpolate(model, settings, transforms);
}
exports.interpolateItemId = interpolateItemId;
//# sourceMappingURL=interpolate-item-id.js.map