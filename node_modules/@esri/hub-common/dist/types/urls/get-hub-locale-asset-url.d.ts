import { IPortal } from "@esri/arcgis-rest-portal";
/**
 * Given a Portal object, return the full Hub locale asset url
 * Used for fetching translations
 * @param {Object} portal Portal Self
 */
export declare function getHubLocaleAssetUrl(portal: IPortal): string;
