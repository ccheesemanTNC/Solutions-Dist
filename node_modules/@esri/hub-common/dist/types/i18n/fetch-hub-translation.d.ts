import { IPortal } from "@esri/arcgis-rest-portal";
/**
 * Fetch the Hub translation file for a given locale
 * These are all public urls and should never require auth/tokens etc
 * @param {String} locale Locale code - i.e. `es`
 * @param {Object} portal Portal Self
 */
export declare function fetchHubTranslation(locale: string, portal: IPortal, mode?: RequestMode): Promise<any>;
