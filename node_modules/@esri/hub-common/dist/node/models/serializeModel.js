"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeModel = void 0;
const util_1 = require("../util");
/**
 * Given a model, return a serialized clone that can be sent to
 * the items api
 * @param {Object} model Item model {item:{}, data:{}}
 */
function serializeModel(model) {
    const serialized = util_1.cloneObject(model.item);
    serialized.text = JSON.stringify(model.data);
    return serialized;
}
exports.serializeModel = serializeModel;
//# sourceMappingURL=serializeModel.js.map