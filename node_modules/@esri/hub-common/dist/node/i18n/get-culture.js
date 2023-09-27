"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCulture = void 0;
const objects_1 = require("../objects");
/**
 * Return the culture from the Hub Request Options
 * In priority order: user.culture, portal.culture, en-us
 * @param {IHubRequestOptions} hubRequestOptions
 */
function getCulture(hubRequestOptions) {
    return (objects_1.getProp(hubRequestOptions, "portalSelf.user.culture") ||
        objects_1.getProp(hubRequestOptions, "portalSelf.culture") ||
        "en-us");
}
exports.getCulture = getCulture;
//# sourceMappingURL=get-culture.js.map