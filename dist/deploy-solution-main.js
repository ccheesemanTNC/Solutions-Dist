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
// @esri/solution-deployer deploySolution example
define(["require", "exports", "@esri/solution-common", "@esri/solution-deployer", "@esri/arcgis-rest-portal", "./getFormattedItemInfo"], function (require, exports, common, deployer, portal, getFormattedItemInfo) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isJsonStr = exports.getTemplates = exports.getFolders = exports.deployAndDisplaySolution = exports.deploySolution = exports.deploySolutionsInFolder = void 0;
    function deploySolutionsInFolder(folderId, srcAuthentication, destAuthentication, progressCallback, enableItemReuse, customParams) {
        const query = new portal.SearchQueryBuilder()
            .match(folderId).in("ownerfolder").and()
            .match("Solution").in("type").and()
            .match("Template").in("typekeywords");
        return portal.searchItems({
            q: query,
            num: 100,
            authentication: srcAuthentication
        })
            .then((queryResponse) => {
            if (queryResponse.results.length > 0) {
                const solutionsToDeploy = queryResponse.results.map(result => {
                    return {
                        id: result.id,
                        title: result.title
                    };
                });
                return deployBatchOfSolutions(solutionsToDeploy, solutionsToDeploy.length, srcAuthentication, destAuthentication, progressCallback, enableItemReuse, customParams);
            }
            else {
                return Promise.resolve("<i>No solutions found in folder</i>");
            }
        });
    }
    exports.deploySolutionsInFolder = deploySolutionsInFolder;
    function deployBatchOfSolutions(solutionsToDeploy, totalNumberOfSolutions, srcAuthentication, destAuthentication, progressCallback, enableItemReuse, customParams) {
        // Deploy the first item in the list
        let solution = null;
        let solutionHtml = "";
        let deployPromise = Promise.resolve("");
        if (solutionsToDeploy.length > 0) {
            solution = solutionsToDeploy.shift();
            const index = totalNumberOfSolutions - solutionsToDeploy.length;
            deployPromise = deploySolution(solution, index + '/' + totalNumberOfSolutions + ' "' + solution.title + '"', srcAuthentication, destAuthentication, progressCallback, enableItemReuse, customParams);
        }
        return deployPromise
            .then(html => {
            solutionHtml = html;
            // Are there any more items in the list?
            let remainingDeployPromise = Promise.resolve("");
            if (solutionsToDeploy.length > 0) {
                remainingDeployPromise = deployBatchOfSolutions(solutionsToDeploy, totalNumberOfSolutions, srcAuthentication, destAuthentication, progressCallback, enableItemReuse, customParams);
            }
            return remainingDeployPromise;
        })
            .then(remainingHtml => {
            return solutionHtml + remainingHtml;
        });
    }
    function deploySolution(templateSolution, jobId, srcAuthentication, destAuthentication, progressCallback, enableItemReuse, customParams) {
        // Deploy a solution described by the supplied id
        const options = {
            jobId,
            progressCallback: progressCallback,
            consoleProgress: true,
            storageAuthentication: srcAuthentication,
            enableItemReuse,
            templateDictionary: isJsonStr(customParams) ? {
                params: JSON.parse(customParams)
            } : {}
        };
        const itemUrlPrefix = destAuthentication.portal.replace("/sharing/rest", "");
        return deployer.deploySolution(templateSolution.id, destAuthentication, options)
            .then((deployedSolution) => {
            return 'Deployed solution "' + templateSolution.title + '" into <a href="' + itemUrlPrefix +
                '/home/item.html?id=' + deployedSolution + '" target="_blank">' + deployedSolution + '</a><br/>';
        });
    }
    exports.deploySolution = deploySolution;
    function deployAndDisplaySolution(templateSolutionId, srcAuthentication, destAuthentication, progressCallback, enableItemReuse, customParams) {
        // Deploy a solution described by the supplied id
        // only pass custom params to the templateDictionary
        const options = {
            jobId: templateSolutionId,
            progressCallback: progressCallback,
            consoleProgress: true,
            storageAuthentication: srcAuthentication,
            enableItemReuse,
            templateDictionary: isJsonStr(customParams) ? {
                params: JSON.parse(customParams)
            } : {}
        };
        return deployer.deploySolution(templateSolutionId, destAuthentication, options)
            .then((deployedSolution) => {
            return getFormattedItemInfo.getFormattedItemInfo(deployedSolution, destAuthentication);
        });
    }
    exports.deployAndDisplaySolution = deployAndDisplaySolution;
    function getFolders(authentication) {
        return portal.getUserContent({ authentication })
            .then((response) => {
            return response.folders.map((folder) => {
                return {
                    id: folder.id,
                    title: folder.title
                };
            });
        });
    }
    exports.getFolders = getFolders;
    function getTemplates(primarySolutionsGroupId, agoBasedEnterpriseSolutionsGroupId, authentication) {
        const query = "type: Solution typekeywords:Solution,Template";
        const anonUS = new common.UserSession({ portal: "https://www.arcgis.com/sharing/rest" });
        const additionalSearchOptions = {
            sortField: "title",
            sortOrder: "asc"
        };
        const searches = [];
        if (primarySolutionsGroupId) {
            searches.push(common.searchGroupAllContents(primarySolutionsGroupId, query, authentication || anonUS, additionalSearchOptions));
        }
        if (agoBasedEnterpriseSolutionsGroupId) {
            searches.push(common.searchGroupAllContents(agoBasedEnterpriseSolutionsGroupId, query, authentication || anonUS, additionalSearchOptions));
        }
        return Promise.all(searches)
            .then(responseSet => {
            let items = [];
            // Bundle the results
            if (responseSet.length === 1) {
                items = responseSet[0].results;
            }
            else if (responseSet.length === 2) {
                items = responseSet[0].results.concat(responseSet[1].results);
            }
            // Screen the results
            const cleanResults = common.sanitizeJSON(items);
            // Construct the results
            const cardList = [];
            cleanResults.forEach((result) => {
                // Extract version for this item
                let version = "";
                (result.typeKeywords || []).some((element) => {
                    if (element.startsWith("solutionversion-")) {
                        version = element.substring("solutionversion-".length);
                        return true;
                    }
                    return false;
                });
                // Add item to results list
                const card = {
                    id: result.id,
                    title: result.title,
                    version
                };
                cardList.push(card);
            });
            // And return them
            return Promise.resolve(cardList);
        });
    }
    exports.getTemplates = getTemplates;
    function isJsonStr(v) {
        // string must contain valid json object with at least one key
        let parsedValue = {};
        try {
            parsedValue = JSON.parse(v);
        }
        catch (e) {
            return false;
        }
        return Object.keys(parsedValue).length > 0;
    }
    exports.isJsonStr = isJsonStr;
});
//# sourceMappingURL=deploy-solution-main.js.map