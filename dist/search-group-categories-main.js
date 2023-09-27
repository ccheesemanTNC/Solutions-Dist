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
// @esri/solution-common searchGroupCategories example
define(["require", "exports", "@esri/solution-common"], function (require, exports, common) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.updateQuery = exports.runQuery = exports.searchGroupCategories = void 0;
    //#region External ---------------------------------------------------------------------------------------------------//
    function searchGroupCategories(groupId, authentication) {
        return new Promise((resolve, reject) => {
            gGroupId = groupId;
            gAuthentication = authentication;
            if (!groupId) {
                reject("Group's ID is not defined");
                return;
            }
            // Get the group information
            const groupBaseDef = common.getGroupBase(groupId, authentication);
            const groupCategorySchemaDef = common.getGroupCategorySchema(groupId, authentication);
            Promise.all([groupBaseDef, groupCategorySchemaDef]).then(async (responses) => {
                const [groupBase, groupCategorySchema] = responses;
                // Summarize what we have
                // ----------------------
                // (groupBase: common.IGroup)  text/plain JSON
                // (groupCategorySchema: common.IGroupCategorySchema)
                const portalUrl = common.getPortalUrlFromAuth(authentication);
                let html = "<h3>" +
                    '"' +
                    groupBase.title +
                    '" (<a href="' +
                    portalUrl +
                    "/home/group.html?id=" +
                    groupBase.id +
                    '" target="_blank">' +
                    groupBase.id +
                    "</a>)</h3>";
                if (groupCategorySchema.categorySchema.length === 0) {
                    html += "<p><i>no categories were found in this group</i>";
                }
                else {
                    let menuHtml = "";
                    for (let i = 0; i < 8; ++i) {
                        if (i > 0) {
                            menuHtml += "AND<br>";
                        }
                        menuHtml += convertSchemaToMenu(groupCategorySchema, "AND_set_" + i);
                    }
                    html +=
                        '<div style="width:48%;display:inline-block;">Search for categories</div>' +
                            '<div style="width:2%;display:inline-block;"></div>' +
                            '<div style="width:48%;display:inline-block;">Query</div>' +
                            '<div style="width:48%;display:inline-block;">' +
                            '<div id="menu">' +
                            menuHtml +
                            "</div>" +
                            '</div><div style="width:2%;display:inline-block;"></div>' +
                            '<div style="width:48%;display:inline-block;vertical-align:top;">' +
                            '<div id="query" style="font-size:x-small"></div>' +
                            "</div>";
                }
                resolve(html);
            }, (error) => reject(JSON.stringify(error)));
        });
    }
    exports.searchGroupCategories = searchGroupCategories;
    function runQuery() {
        const queryCategories = [];
        let currentORset = "";
        let currentCategoryORGroup = "";
        gQueryItems.forEach(queryItem => {
            const queryItemParts = queryItem.split("|");
            if (currentORset !== queryItemParts[0]) {
                if (currentCategoryORGroup) {
                    queryCategories.push(currentCategoryORGroup);
                    currentCategoryORGroup = "";
                }
                currentORset = queryItemParts[0];
            }
            else {
                currentCategoryORGroup += ",";
            }
            currentCategoryORGroup += queryItemParts[1];
        });
        if (currentCategoryORGroup) {
            queryCategories.push(currentCategoryORGroup);
        }
        const searchString = "";
        const additionalSearchOptions = {
            categories: queryCategories,
            num: 100
        };
        common
            .searchGroupContents(gGroupId, searchString, gAuthentication, additionalSearchOptions)
            .then((response) => {
            const results = response.results;
            let html = "";
            if (results.length === 0) {
                html += "<i>nothing found</i>";
            }
            else {
                html += '<ol style="padding-inline-start:1em;">';
                results.forEach((result) => {
                    html +=
                        "<li>" +
                            result.title +
                            " (" +
                            result.id +
                            ")<br>" +
                            JSON.stringify(result.groupCategories) +
                            "</li>";
                });
                html += "</0l>";
            }
            document.getElementById("queryResults").innerHTML = html;
        }, err => {
            document.getElementById("queryResults").innerHTML = colorize("red", textAreaHtmlFromJSON(err));
        });
    }
    exports.runQuery = runQuery;
    function updateQuery(event) {
        const itemTag = event.name + "|" + event.value;
        if (event.checked) {
            gQueryItems.push(itemTag);
        }
        else {
            gQueryItems.splice(gQueryItems.indexOf(itemTag), 1);
        }
        gQueryItems.sort();
        let html = "";
        if (gQueryItems.length > 0) {
            let currentANDset = "";
            html += "(<br>&nbsp;&nbsp;";
            gQueryItems.forEach(queryItem => {
                const queryItemParts = queryItem.split("|");
                if (currentANDset !== queryItemParts[0]) {
                    if (currentANDset) {
                        html += "<br>) AND (<br>&nbsp;&nbsp;";
                    }
                    currentANDset = queryItemParts[0];
                }
                else {
                    html += " OR ";
                }
                html += queryItemParts[1];
            });
            html += "<br>)<br>";
            html +=
                '<br><br><button onclick="runQueryFcn()">Search</button><br><br>' +
                    '<div id="queryResults" style="font-size:small"></div>';
        }
        document.getElementById("query").innerHTML = html;
    }
    exports.updateQuery = updateQuery;
    //#endregion ---------------------------------------------------------------------------------------------------------//
    //#region Internal ---------------------------------------------------------------------------------------------------//
    const gQueryItems = [];
    let gGroupId = "";
    let gAuthentication;
    function convertSchemaToMenu(groupCategorySchema, menuId) {
        let html = '<div id="' +
            menuId +
            '" style="margin-left:1em">ORed' +
            '<ul style="list-style-type:none;margin-block-start:0.1em;padding-inline-start:1em;">';
        const path = "";
        if (Array.isArray(groupCategorySchema.categorySchema) &&
            groupCategorySchema.categorySchema.length > 0) {
            groupCategorySchema.categorySchema.forEach(category => {
                html += makeDescendentCheckboxes(menuId, path, category);
            });
        }
        html += "</ul></div>";
        return html;
    }
    function createCheckbox(id, name, label, value) {
        let html = '<input type="checkbox" id="' +
            id +
            '" name="' +
            name +
            '" value="' +
            value +
            '" onchange="updateQueryFcn(this)">';
        html += '<label for="' + id + '">' + label + "</label>";
        return html;
    }
    function makeDescendentCheckboxes(menuId, path, groupCategory) {
        let html = "";
        path += "/" + groupCategory.title;
        if (Array.isArray(groupCategory.categories) &&
            groupCategory.categories.length > 0) {
            groupCategory.categories.forEach(category => {
                html += makeDescendentCheckboxes(menuId, path, category);
            });
        }
        else {
            html =
                '<li style="margin-bottom:0;font-size:smaller">' +
                    createCheckbox(common.createShortId(), menuId, path, path) +
                    "</li>";
        }
        return html;
    }
    function colorize(color, text) {
        return '<span style="color:' + color + '">' + text + "</span><br>";
    }
    /**
     * Creates the HTML for a textarea using the supplied JSON.
     *
     * @param json JSON to insert into textarea
     * @returns textarea HTML
     */
    function textAreaHtmlFromJSON(json) {
        return textAreaHtmlFromText(JSON.stringify(common.sanitizeJSON(json), null, 2));
    }
    /**
     * Creates the HTML for a textarea using the supplied text.
     *
     * @param text Text to insert into textarea
     * @returns textarea HTML
     */
    function textAreaHtmlFromText(text) {
        return ('<textarea rows="10" style="width:99%;font-size:x-small">' +
            text +
            "</textarea>");
    }
});
//#endregion ---------------------------------------------------------------------------------------------------------//
//# sourceMappingURL=search-group-categories-main.js.map