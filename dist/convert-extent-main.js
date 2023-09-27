/** @license
 * Copyright 2019 Esri
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// @esri/solution-common convertExtent example
define(["require", "exports", "@esri/solution-common", "@esri/arcgis-rest-portal"], function (require, exports, common, portal) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertPortalExtents = void 0;
    function convertPortalExtents(portalId) {
        return new Promise((resolve, reject) => {
            const usOptions = {};
            const authorization = new common.UserSession(usOptions);
            // Get the extents of a portal
            // tslint:disable-next-line: no-floating-promises
            portal.getPortal(portalId, { authentication: authorization }).then(portalResponse => {
                const portalExtent = portalResponse.defaultExtent;
                let html = "";
                html += "<h4>Source extents</h4>";
                if (!portalId) {
                    html += "<i>Using sample extents</i><br/>";
                }
                html += "<pre>" + JSON.stringify(portalExtent, null, 4) + "</pre>";
                // Convert the extents
                const outSR = { wkid: 4326 };
                const geometryServiceUrl = "http://sampleserver6.arcgisonline.com/arcgis/rest/services/Utilities/Geometry/GeometryServer";
                // tslint:disable-next-line: no-floating-promises
                common
                    .convertExtent(portalExtent, outSR, geometryServiceUrl, authorization)
                    .then(conversionResponse => {
                    html += "<h4>Projected extents</h4>";
                    html +=
                        "<pre>" +
                            JSON.stringify(conversionResponse, null, 4) +
                            "</pre>";
                    resolve(html);
                }, (error) => reject(JSON.stringify(error)));
            }, (error) => reject(JSON.stringify(error)));
        });
    }
    exports.convertPortalExtents = convertPortalExtents;
});
//# sourceMappingURL=convert-extent-main.js.map