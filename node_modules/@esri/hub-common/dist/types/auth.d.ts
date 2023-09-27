import { UserSession, IOAuth2Options } from "@esri/arcgis-rest-auth";
/**
 * A thin wrapper around [`UserSession.completeOAuth2()`](https://esri.github.io/arcgis-rest-js/api/auth/UserSession/#completeOAuth2) that sets search tags and other relevant metadata for newly created community users.
 */
export declare function completeOAuth2(options: IOAuth2Options, win?: any): Promise<UserSession>;
