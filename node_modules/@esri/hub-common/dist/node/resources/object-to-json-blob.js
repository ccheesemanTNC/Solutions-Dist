"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectToJsonBlob = void 0;
/**
 * Convert an object to a Blob with type  'application/json'
 * @param {*} obj
 * @returns Blob
 */
function objectToJsonBlob(obj) {
    /* istanbul ignore next */
    if (typeof Blob !== "undefined") {
        return new Blob([JSON.stringify(obj)], { type: "application/json" });
    }
    else {
        throw new Error(`objectToJsonBlob is not currently supported on Node`);
    }
}
exports.objectToJsonBlob = objectToJsonBlob;
//# sourceMappingURL=object-to-json-blob.js.map