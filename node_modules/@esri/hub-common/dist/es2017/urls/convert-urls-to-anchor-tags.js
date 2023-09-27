/**
 * Convert urls in a string to hyperlinks
 * @param {content} string
 */
export function convertUrlsToAnchorTags(content) {
    const urls = content.match(/((((ftp|https?):\/\/)|(w{3}\.))[-\w@:%_+.~#?,&//=]+)/g);
    if (urls) {
        urls.forEach(function (url) {
            content = content.replace(url, '<a target="_blank" href="' + url + '">' + url + "</a>");
        });
    }
    return content.replace("(", "<br/>(");
}
//# sourceMappingURL=convert-urls-to-anchor-tags.js.map