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
define(["require", "exports", "@esri/solution-common"], function (require, exports, common) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.runLegacies = void 0;
    function runLegacies() {
        return new Promise(resolve => {
            let html = test_new_File(["foo"], "filename.txt", { type: "text/plain" });
            html += "<br><br><br>Browser information:<br><br>" +
                "appVersion: " +
                navigator.appVersion +
                "<br><br>" +
                "userAgent: " +
                navigator.userAgent +
                "<br><br>";
            resolve(html);
        });
    }
    exports.runLegacies = runLegacies;
    function test_new_File(fileBits, fileName, options) {
        const file = common.new_File(fileBits, fileName, options);
        if (file) {
            return "<span style=\"color:green\">&#x2714; Able to create a File object in the browser</span>";
        }
        else {
            return "<span style=\"color:red\">&#x2716; Failed to create a File object in the browser</span>";
        }
    }
});
// ================================================================================================================== //
//# sourceMappingURL=polyfill-explorer-main.js.map