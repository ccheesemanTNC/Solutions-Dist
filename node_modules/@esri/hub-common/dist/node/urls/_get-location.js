"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._getLocation = void 0;
/**
 * Wrapper over window.location
 * @private
 */
/* istanbul ignore next */
function _getLocation() {
    /* istanbul ignore next */
    if (window) {
        return window.location;
    }
}
exports._getLocation = _getLocation;
//# sourceMappingURL=_get-location.js.map