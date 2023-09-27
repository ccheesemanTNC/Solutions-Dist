import { cloneObject } from "../util";
/**
 * Given a model, return a serialized clone that can be sent to
 * the items api
 * @param {Object} model Item model {item:{}, data:{}}
 */
export function serializeModel(model) {
    const serialized = cloneObject(model.item);
    serialized.text = JSON.stringify(model.data);
    return serialized;
}
//# sourceMappingURL=serializeModel.js.map