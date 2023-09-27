"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToWellKnownLocale = void 0;
const hub_locales_1 = require("./hub-locales");
/**
 * Convert a requested locale into a locale we support.
 * i.e. en-ca => en
 * If the requested locale is not available, en will be returned
 * @param {string} requestedLocale Locale we want
 */
function convertToWellKnownLocale(requestedLocale = "en") {
    let wellKnownKey = "en";
    // ensure downcase
    requestedLocale = requestedLocale.toLowerCase();
    // see if it's in the hub translations as-is
    if (hub_locales_1.HUB_LOCALES.indexOf(requestedLocale) > -1) {
        wellKnownKey = requestedLocale;
    }
    else {
        // if we split the requested locale, see if we have the root in the list
        const parts = requestedLocale.split("-");
        if (parts.length > 1 && hub_locales_1.HUB_LOCALES.indexOf(parts[0]) > -1) {
            wellKnownKey = parts[0];
        }
    }
    return wellKnownKey;
}
exports.convertToWellKnownLocale = convertToWellKnownLocale;
//# sourceMappingURL=convert-to-well-known-locale.js.map