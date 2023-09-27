import { IRequestOptions } from "@esri/arcgis-rest-request";
import { IPortal } from "@esri/arcgis-rest-portal";
import { IHubRequestOptions } from "../types";
/**
 * Return the URL of the item's page in the Portal Home application
 * @param itemId The item's ID
 * @param portalUrlOrObject a portal base or API URL, a portal object, or request options containing either of those
 * @returns URL to the item's data REST end point, defaults to `https://www.arcgis.com/home/item.html?id={item.id}`
 */
export declare function getItemHomeUrl(itemId: string, portalUrlOrObject?: string | IPortal | IHubRequestOptions | IRequestOptions): string;
