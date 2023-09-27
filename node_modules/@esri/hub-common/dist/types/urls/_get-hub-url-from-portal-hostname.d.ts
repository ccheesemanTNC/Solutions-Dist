/**
 * Parse the portal url, and if it matches one of the AGO
 * Url patterns, return the correct Hub Url
 * If portalUrl does not match an AGO pattern, this will
 * return `undefined`
 * @param portalUrl
 * @private
 */
export declare function _getHubUrlFromPortalHostname(portalUrl: string): string;
