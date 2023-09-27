import { UserSession } from "@esri/arcgis-rest-auth";
/**
 * Remove any serialized sessions associated with the passed clientId
 * from a browser's local storage
 * @param clientId oAuth Client Id
 * @param win optional window (used for testing)
 */
export function clearSession(clientId, 
/* istanbul ignore next */
win = window) {
    if (win.localStorage) {
        win.localStorage.removeItem(`__CONTEXT_${clientId}`);
    }
}
/**
 * Re-hydrate a UserSession from a browser's local storage.
 * If not found,
 * @param clientId oAuth Client Id
 * @param win optional window (used for testing)
 * @returns
 */
export function getSession(clientId, 
/* istanbul ignore next */
win = window) {
    let result = null;
    if (win.localStorage) {
        const serializedSession = win.localStorage.getItem(`__CONTEXT_${clientId}`);
        if (serializedSession) {
            result = UserSession.deserialize(serializedSession);
        }
    }
    return result;
}
/**
 * Serialize a UserSession into a browser's local storage
 * @param clientId oAuth Client Id
 * @param session UserSession
 * @param win optional window (used for testing)
 */
export function saveSession(clientId, session, 
/* istanbul ignore next */
win = window) {
    if (win.localStorage) {
        win.localStorage.setItem(`__CONTEXT_${clientId}`, session.serialize());
    }
}
//# sourceMappingURL=sessionLocalStorage.js.map