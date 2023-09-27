"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interpolate = void 0;
const adlib_1 = require("adlib");
/**
 * Interpolates handlebars-style placeholders on an object graph
 * @param template
 * @param settings
 * @param transforms
 */
function interpolate(template, settings, transforms) {
    return adlib_1.adlib(template, settings, transforms);
}
exports.interpolate = interpolate;
//# sourceMappingURL=interpolate.js.map