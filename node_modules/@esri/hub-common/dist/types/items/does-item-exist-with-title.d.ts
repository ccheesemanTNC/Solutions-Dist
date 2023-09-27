import { IAuthenticationManager } from "@esri/arcgis-rest-request";
/**
 * Check if a site/page exists with a specific name
 */
export declare function doesItemExistWithTitle(itemTitle: string, options: Record<string, string>, authMgr: IAuthenticationManager): Promise<boolean>;
