"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToBlob = void 0;
/**
 * Given a string, return it as a blob
 * NOTE: USE objectToJsonBlob if you're saving a JSON resource!!!
 * NOTE: This is not currently supported in Node
 * @param {string} the string
 */
function stringToBlob(s, type = "application/octet-stream") {
    /* istanbul ignore next */
    if (typeof Blob !== "undefined") {
        const bytes = [];
        for (let i = 0; i < s.length; i++) {
            bytes[i] = s.charCodeAt(i);
        }
        const encoded = new Uint8Array(bytes);
        return new Blob([encoded], { type });
    }
    else {
        throw new Error(`stringToBlob is not currently supported on Node`);
    }
}
exports.stringToBlob = stringToBlob;
//# sourceMappingURL=string-to-blob.js.map