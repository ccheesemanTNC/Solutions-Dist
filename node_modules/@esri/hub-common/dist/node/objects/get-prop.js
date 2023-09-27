"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProp = void 0;
/**
 * Get a property out of a deeply nested object
 * Does not handle anything but nested object graph
 */
function getProp(obj, path) {
    return path.split(".").reduce(function (prev, curr) {
        /* istanbul ignore next no need to test undefined scenario */
        return prev ? prev[curr] : undefined;
    }, obj);
}
exports.getProp = getProp;
//# sourceMappingURL=get-prop.js.map