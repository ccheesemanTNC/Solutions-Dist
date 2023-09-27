"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveSession = exports.getSession = exports.clearSession = void 0;
const arcgis_rest_auth_1 = require("@esri/arcgis-rest-auth");
/**
 * Remove any serialized sessions associated with the passed clientId
 * from a browser's local storage
 * @param clientId oAuth Client Id
 * @param win optional window (used for testing)
 */
function clearSession(clientId, 
/* istanbul ignore next */
win = window) {
    if (win.localStorage) {
        win.localStorage.removeItem(`__CONTEXT_${clientId}`);
    }
}
exports.clearSession = clearSession;
/**
 * Re-hydrate a UserSession from a browser's local storage.
 * If not found,
 * @param clientId oAuth Client Id
 * @param win optional window (used for testing)
 * @returns
 */
function getSession(clientId, 
/* istanbul ignore next */
win = window) {
    let result = null;
    if (win.localStorage) {
        const serializedSession = win.localStorage.getItem(`__CONTEXT_${clientId}`);
        if (serializedSession) {
            result = arcgis_rest_auth_1.UserSession.deserialize(serializedSession);
        }
    }
    return result;
}
exports.getSession = getSession;
/**
 * Serialize a UserSession into a browser's local storage
 * @param clientId oAuth Client Id
 * @param session UserSession
 * @param win optional window (used for testing)
 */
function saveSession(clientId, session, 
/* istanbul ignore next */
win = window) {
    if (win.localStorage) {
        win.localStorage.setItem(`__CONTEXT_${clientId}`, session.serialize());
    }
}
exports.saveSession = saveSession;
//# sourceMappingURL=sessionLocalStorage.js.map