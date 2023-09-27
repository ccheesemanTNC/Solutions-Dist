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
// @esri/solution-common copyItemInfo example
define(["require", "exports", "@esri/solution-common"], function (require, exports, common) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getCopyableItemBaseProperties = exports.copyItemInfo = void 0;
    function copyItemInfo(itemId, authentication) {
        return new Promise((resolve, reject) => {
            if (!itemId) {
                reject("Item's ID is not defined");
                return;
            }
            // Get the item information
            const itemBaseDef = common.getItemBase(itemId, authentication);
            const itemDataDef = new Promise((resolve2, reject2) => {
                // tslint:disable-next-line: no-floating-promises
                itemBaseDef.then(
                // any error fetching item base will be handled via Promise.all later
                (itemBase) => {
                    common
                        .getItemDataAsFile(itemId, itemBase.name, authentication)
                        .then(resolve2, (error) => reject2(JSON.stringify(error)));
                });
            });
            const itemMetadataDef = common.getItemMetadataAsFile(itemId, authentication);
            const itemResourcesDef = common.getItemResourcesFiles(itemId, authentication);
            Promise.all([
                itemBaseDef,
                itemDataDef,
                itemMetadataDef,
                itemResourcesDef
            ]).then(responses => {
                const [itemBase, itemDataFile, itemMetadataFile, itemResourceFiles] = responses;
                // Construct the thumbnail URL from the item base info
                const itemThumbnailUrl = common.getItemThumbnailUrl(itemId, itemBase.thumbnail, false, authentication);
                // Summarize what we have
                // ----------------------
                // (itemBase: any)  text/plain JSON
                // (itemDataDef: File)  */*
                // (itemThumbnailUrl: string)
                // (itemMetadataDef: Blob)  application/xml
                // (itemResourcesDef: File[])  list of */*
                console.log("itemBase", itemBase);
                console.log("itemData", itemDataFile);
                console.log("itemThumbnail", itemThumbnailUrl);
                console.log("itemMetadata", itemMetadataFile);
                console.log("itemResources", itemResourceFiles);
                // Create the copy after extracting properties that aren't specific to the source
                common
                    .createFullItem(getCopyableItemBaseProperties(itemBase), undefined, // folder id
                authentication, itemThumbnailUrl, authentication, itemDataFile, itemMetadataFile, itemResourceFiles, "public")
                    .then((createResponse) => {
                    resolve(JSON.stringify(createResponse));
                }, (error) => reject(JSON.stringify(error)));
            }, (error) => reject(JSON.stringify(error)));
        });
    }
    exports.copyItemInfo = copyItemInfo;
    /**
     * Extracts the properties of an item that can be copied.
     *
     * @param sourceItem Item from which to copy properties
     * @returns Object containing copyable properties from sourceItem
     */
    function getCopyableItemBaseProperties(sourceItem) {
        const copyableItem = {
            name: sourceItem.name,
            title: sourceItem.title,
            type: sourceItem.type,
            typeKeywords: sourceItem.typeKeywords,
            description: sourceItem.description,
            tags: sourceItem.tags,
            snippet: sourceItem.snippet,
            documentation: sourceItem.documentation,
            extent: sourceItem.extent,
            categories: sourceItem.categories,
            spatialReference: sourceItem.spatialReference
        };
        return copyableItem;
    }
    exports.getCopyableItemBaseProperties = getCopyableItemBaseProperties;
});
//# sourceMappingURL=copy-item-info-main.js.map