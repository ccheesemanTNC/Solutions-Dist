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
import * as common from "@esri/solution-common";
/**
 * Copies an item.
 *
 * @param itemId Id of item in source
 * @param sourceAuthentication Authentication for source
 * @param destinationAuthentication Authentication for destination; can be same as source for copying
 * within source organization
 */
export declare function copyItemInfo(itemId: string, sourceAuthentication: common.UserSession, destinationAuthentication: common.UserSession): Promise<string>;
/**
 * Extracts the properties of an item that can be copied.
 *
 * @param sourceItem Item from which to copy properties
 * @returns Object containing copyable properties from sourceItem
 */
export declare function getCopyableItemBaseProperties(sourceItem: any): any;
/**
 * Gets items with "Solution,Template" type keywords.
 *
 * @param authentication Authentication for server to query
 * @param getAllOrgSolutions If true, gets all Solution templates in organization regardless of owner
 * @returns Solution templates
 */
export declare function getTemplates(authentication: common.UserSession, getAllOrgSolutions?: boolean): Promise<common.ISearchResult<common.IItem>>;
