import { UserSession } from "@esri/arcgis-rest-auth";
/**
 * Remove any serialized sessions associated with the passed clientId
 * from a browser's local storage
 * @param clientId oAuth Client Id
 * @param win optional window (used for testing)
 */
export declare function clearSession(clientId: string, win?: any): void;
/**
 * Re-hydrate a UserSession from a browser's local storage.
 * If not found,
 * @param clientId oAuth Client Id
 * @param win optional window (used for testing)
 * @returns
 */
export declare function getSession(clientId: string, win?: any): UserSession | null;
/**
 * Serialize a UserSession into a browser's local storage
 * @param clientId oAuth Client Id
 * @param session UserSession
 * @param win optional window (used for testing)
 */
export declare function saveSession(clientId: string, session: UserSession, win?: any): void;
