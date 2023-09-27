/**
 * Given a url to an image, return it as a blob
 * @param {String} url Url to fetch the image from. Must have token if it's a non-publi item resource url
 * @param {Object} options additional optinos
 */
export declare function fetchImageAsBlob(url: string, options?: RequestInit): Promise<Blob>;
