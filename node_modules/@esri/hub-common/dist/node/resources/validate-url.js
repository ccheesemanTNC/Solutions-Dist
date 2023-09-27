"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUrl = void 0;
const types_1 = require("../types");
const utils_1 = require("../utils");
const _validate_url_helpers_1 = require("./_internal/_validate-url-helpers");
/**
 * Takes in a URL and validates it based on valid url, type of item, etc
 *
 * @export
 * @param {string} url
 * @return {*}  {Promise<any>}
 */
async function validateUrl(url) {
    // If URL doesn't pass then exit out immediately.
    if (!_validate_url_helpers_1.isUrl(url)) {
        return {
            pass: false,
            error: "invalidFormat",
        };
    }
    // Check if it's a FS, Map service, or image service
    const isFeatureServiceUrl = _validate_url_helpers_1.isFeatureService(url);
    const isServiceUrl = _validate_url_helpers_1.isService(url);
    if (isServiceUrl && !isFeatureServiceUrl) {
        return {
            pass: false,
            error: "invalidFormat",
        };
    }
    // Content type which can be determined bby the url file extnesion or the request response header
    let type;
    let item;
    let pingResult = {};
    try {
        pingResult = isFeatureServiceUrl
            ? await _validate_url_helpers_1.pingFeatureService(url)
            : await _validate_url_helpers_1.pingUrl(url);
        // return an error if the response is not okay
        if (!pingResult.ok) {
            return {
                pass: false,
                error: "invalidUrl",
            };
        }
    }
    catch (e) {
        // TODO: This is tricky. The fetch() API rejects when a network error
        // happens. This error can be a CORS error, or a 404 error, or a timeout
        // error. While an error like 404 does suggest a bad URL, the CORS occurs
        // because this is a front-end request and the file is likely accessible by
        // the server. Unfortunately, the error doesn't have any information about
        // underline failure type. For now, the network failure is ignored, so the
        // user can paste a URL from any domain and avoid the CORS issue.
        utils_1.Logger.error(`error requesting url`);
    }
    // Use the metadata from the ping response if exists, otherwise guess the file
    // name from the URL
    if (pingResult.item) {
        item = pingResult.item;
    }
    else {
        item = { title: _validate_url_helpers_1.getFileName(url), url };
    }
    if (pingResult.headers) {
        type = _validate_url_helpers_1.detectDataTypeFromHeader(pingResult.headers);
    }
    if (isFeatureServiceUrl) {
        type = types_1.ItemType["Feature Service"];
    }
    else if (!type) {
        // Guess the data type from the extension
        type = _validate_url_helpers_1.detectDataTypeFromExtension(url);
    }
    if (type) {
        item.type = type;
    }
    if (item.type && _validate_url_helpers_1.shouldHaveDataUrl(item.type)) {
        item.dataUrl = item.url;
    }
    return {
        pass: true,
        // The type may or may not be true
        type,
        // fetched / calculated item
        item,
    };
}
exports.validateUrl = validateUrl;
//# sourceMappingURL=validate-url.js.map