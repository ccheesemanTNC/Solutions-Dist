"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertUrlsToAnchorTags = void 0;
/**
 * Convert urls in a string to hyperlinks
 * @param {content} string
 */
function convertUrlsToAnchorTags(content) {
    const urls = content.match(/((((ftp|https?):\/\/)|(w{3}\.))[-\w@:%_+.~#?,&//=]+)/g);
    if (urls) {
        urls.forEach(function (url) {
            content = content.replace(url, '<a target="_blank" href="' + url + '">' + url + "</a>");
        });
    }
    return content.replace("(", "<br/>(");
}
exports.convertUrlsToAnchorTags = convertUrlsToAnchorTags;
//# sourceMappingURL=convert-urls-to-anchor-tags.js.map