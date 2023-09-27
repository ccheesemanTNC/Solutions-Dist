/**
 * Convert a requested locale into a locale we support.
 * i.e. en-ca => en
 * If the requested locale is not available, en will be returned
 * @param {string} requestedLocale Locale we want
 */
export declare function convertToWellKnownLocale(requestedLocale?: string): string;
