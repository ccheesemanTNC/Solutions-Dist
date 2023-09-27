/** @license
 * Copyright 2021 Esri
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
// @esri/solution-common getItemHierarchy example
define(["require", "exports", "@esri/solution-common", "@esri/solution-viewer"], function (require, exports, common, viewer) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getFormattedItemHierarchy = void 0;
    // ------------------------------------------------------------------------------------------------------------------ //
    /**
     * Gets a formatted (nested HTML `ol`s) display of a solution template's items.
     *
     * @param itemId Id of a solution template
     * @param authentication Credentials for the request to AGO
     * @returns HTML showing hierarchy
     */
    function getFormattedItemHierarchy(itemId, authentication) {
        return new Promise((resolve, reject) => {
            if (!itemId) {
                reject("Item's ID is not defined");
                return;
            }
            let solutionTitle = itemId;
            // Get the item information
            common.getItemBase(itemId, authentication)
                .then((item) => {
                // Item must be a Solution template
                if (item.type !== "Solution" || !item.typeKeywords.includes("Template")) {
                    return reject("This app is for Solution Templates");
                }
                solutionTitle = '"' + item.title + '"';
                // Get the templates in the solution
                return common.getItemDataAsJson(itemId, authentication);
            })
                .then((data) => {
                // Extract the hierarchy from the list of templates
                const hierarchy = viewer.getItemHierarchy(data.templates);
                // Handle an item in the hierarchy
                async function displayItem(item) {
                    const [title, childrenDisplays] = await Promise.all([
                        getItemTitle(item.id, authentication),
                        displayItems(item.dependencies)
                    ]);
                    return "<li>" + title + childrenDisplays + "</li>";
                }
                // Handle a list of hierarchy items at the same level
                async function displayItems(itemList) {
                    const itemDisplays = await Promise.all(itemList.map(async (item) => await displayItem(item)));
                    return itemDisplays.reduce((htmlAccum, itemLine) => htmlAccum + itemLine, "<ul>") + "</ul>";
                }
                // Get an item's title
                function getItemTitle(id, authentication) {
                    return common.getItemBase(id, authentication)
                        .then(item => item.title, () => id);
                }
                return displayItems(hierarchy);
            })
                .then((html) => {
                resolve("<b>Solution Template " + solutionTitle + ":</b><br/><br/>" + html);
            });
        });
    }
    exports.getFormattedItemHierarchy = getFormattedItemHierarchy;
});
// ------------------------------------------------------------------------------------------------------------------ //
//# sourceMappingURL=getFormattedItemHierarchy.js.map