/** @license
 * Copyright 2020 Esri
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
// @esri/solution-common compareJSON example
define(["require", "exports", "@esri/solution-common"], function (require, exports, common) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.compareJSON = void 0;
    function compareJSON(json1, json2) {
        const mismatches = common.compareJSONProperties(json1, json2);
        let html = "";
        if (mismatches.length === 0) {
            html = "JSONs match";
        }
        else {
            html = "Mismatches:<ol>";
            mismatches.forEach(mismatch => (html += "<li>" + encodeHTML(mismatch) + "</li>"));
            html += "</ol>";
        }
        return html;
    }
    exports.compareJSON = compareJSON;
    function encodeHTML(text) {
        return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
});
//# sourceMappingURL=compare-json-main.js.map