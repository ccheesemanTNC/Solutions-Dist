"use strict";
/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.completeOAuth2 = void 0;
const arcgis_rest_request_1 = require("@esri/arcgis-rest-request");
const arcgis_rest_auth_1 = require("@esri/arcgis-rest-auth");
/**
 * A thin wrapper around [`UserSession.completeOAuth2()`](https://esri.github.io/arcgis-rest-js/api/auth/UserSession/#completeOAuth2) that sets search tags and other relevant metadata for newly created community users.
 */
/* istanbul ignore next */
function completeOAuth2(options, win = window) {
    const match = win.location.href.match(/access_token=(.+)&expires_in=.+&username=([^&]+)/);
    const token = match[1];
    const user = decodeURIComponent(match[2]);
    const baseUrl = `https://www.arcgis.com/sharing/rest/community/users/${user}`;
    return arcgis_rest_request_1.request(baseUrl, {
        params: { token },
        httpMethod: "GET"
    }).then(response => {
        if (Date.now() - response.created < 5000) {
            return arcgis_rest_request_1.request(`${baseUrl}/update`, {
                params: {
                    token,
                    tags: ["hubRole:participant", `org:${response.orgId}`],
                    access: "public"
                }
            }).then(() => {
                return arcgis_rest_auth_1.UserSession.completeOAuth2(options);
            });
        }
        else {
            return arcgis_rest_auth_1.UserSession.completeOAuth2(options);
        }
    });
}
exports.completeOAuth2 = completeOAuth2;
//# sourceMappingURL=auth.js.map