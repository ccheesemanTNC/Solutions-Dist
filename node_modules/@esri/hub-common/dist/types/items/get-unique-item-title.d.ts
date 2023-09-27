import { IAuthenticationManager } from "@esri/arcgis-rest-request";
/**
 * Given a title, construct a site/page title that is unique
 * if that title exists, this fn will add a number on the end, and increment until
 * an available title is found
 * @param {string} title site/page title to ensure if unique
 * @param {object} options an object that can be passed in to the q, eg. typekeywords, type
 * @param {object} authMgr auth info tells the function what url to use for the "root" of the API,
 * if missing, it will search against PROD
 * @param {number} step Number to increment. Defaults to 0
 */
export declare function getUniqueItemTitle(title: string, options: Record<string, string>, authMgr: IAuthenticationManager, step?: number): Promise<string>;
