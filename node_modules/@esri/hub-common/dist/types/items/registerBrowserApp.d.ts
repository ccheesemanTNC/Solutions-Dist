import { IRequestOptions } from "@esri/arcgis-rest-request";
/**
 * Register an Item as an application, enabling oAuth flows at custom
 * domains. Only item types with "Application" in the name are valid
 * with this API call.
 * @param {string} itemId Item Id of item to create an application for
 * @param {Array} redirectUris Array of valid redirect uris for the app
 * @param {string} appType Defaults to "browser"
 * @param {IRequestOptions} requestOptions
 */
export declare function registerBrowserApp(itemId: string, redirectUris: string[], requestOptions: IRequestOptions): Promise<any>;
