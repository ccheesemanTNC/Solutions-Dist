import { adlib } from "adlib";
/**
 * Interpolates handlebars-style placeholders on an object graph
 * @param template
 * @param settings
 * @param transforms
 */
export function interpolate(template, settings, transforms) {
    return adlib(template, settings, transforms);
}
//# sourceMappingURL=interpolate.js.map