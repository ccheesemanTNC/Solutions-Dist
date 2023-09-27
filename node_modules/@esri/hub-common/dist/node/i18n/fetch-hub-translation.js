"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchHubTranslation = void 0;
const get_hub_locale_asset_url_1 = require("../urls/get-hub-locale-asset-url");
/**
 * Fetch the Hub translation file for a given locale
 * These are all public urls and should never require auth/tokens etc
 * @param {String} locale Locale code - i.e. `es`
 * @param {Object} portal Portal Self
 */
function fetchHubTranslation(locale, portal, mode = "cors") {
    const assetBase = get_hub_locale_asset_url_1.getHubLocaleAssetUrl(portal);
    const url = `${assetBase}/locales/${locale}.json`.toLocaleLowerCase();
    // to support web-tier auth, we must always send same-origin credentials
    const options = {
        method: "GET",
        credentials: "same-origin",
        mode
    };
    return fetch(url, options)
        .then(response => response.json())
        .catch(err => {
        throw Error(`Attempt to fetch locale ${locale} from ${url} failed: ${JSON.stringify(err)}`);
    });
}
exports.fetchHubTranslation = fetchHubTranslation;
//# sourceMappingURL=fetch-hub-translation.js.map