"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.failSafe = void 0;
/**
 * Wrap an async function such that it will never reject
 * @param {Function} fn Async Function that we want to never fail
 * @param {Object} resolveWith Object to resolve with in the event of a failure
 */
function failSafe(fn, resolveWith = {}) {
    return (...args) => {
        return fn(...args).catch((_) => {
            return resolveWith;
        });
    };
}
exports.failSafe = failSafe;
//# sourceMappingURL=fail-safe.js.map