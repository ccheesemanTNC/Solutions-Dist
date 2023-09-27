import { IRequestOptions } from "@esri/arcgis-rest-request";
import { IPortal } from "@esri/arcgis-rest-portal";
import { IHubRequestOptions } from "../types";
/**
 * ```js
 * import { getPortalUrl } from "@esri/hub-common";
 * // from a portal API URL
 * let portalUrl = getPortalUrl("https://org.maps.arcgis.com/sharing/rest"); // https://org.maps.arcgis.com
 * // from an enterprise portal self response (IPortal)
 * let portalSelf = { isPortal: true, portalHostname: "server.example.org" };
 * portalUrl = getPortalUrl(portalSelf); // https://server.example.org
 * // from an online portal self response (IPortal)
 * portalSelf = { isPortal: false, urlKey: "org", customBaseUrl: "maps.arcgis.com" };
 * portalUrl = getPortalUrl(portalSelf); // https://org.maps.arcgis.com
 * // from hub request options (IHubRequestOptions) with a portal self (IPortal)
 * let requestOptions = { isPortal: false, portalSelf };
 * portalUrl = getPortalUrl(requestOptions); // https://org.maps.arcgis.com
 * // from request options (IRequestOptions) with a portal (string)
 * requestOptions = { portal: "https://org.maps.arcgis.com/sharing/rest" };
 * portalUrl = getPortalUrl(requestOptions); // https://org.maps.arcgis.com
 * ```
 * Derive a portal's base URL from the portal's API URL, a portal object, or request options
 * @param urlOrObject a portal API URL, a portal object, or request options containing either of those
 * @returns The portal base URL, defaults to `https://www.arcgis.com`
 */
export declare function getPortalUrl(urlOrObject?: string | IPortal | IHubRequestOptions | IRequestOptions): string;
