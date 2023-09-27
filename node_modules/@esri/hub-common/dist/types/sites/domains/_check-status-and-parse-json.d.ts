/**
 * Parse a response object, and throw if it contains an error.
 * Just a wrapper to hide some platform idiosyncracies
 * @param {Response} response Response object to parse
 * @private
 */
export declare function _checkStatusAndParseJson(response: Response): Promise<any>;
