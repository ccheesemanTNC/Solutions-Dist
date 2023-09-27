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
import * as common from "@esri/solution-common";
import * as portal from "@esri/arcgis-rest-portal";
/**
 * Adds a loading GIF to a container.
 *
 * @param containerElementId Id of HTML container to receive image element
 * @returns Created HTML item
 */
export declare function addBusySymbol(containerElementId: string): HTMLElement;
/**
 * Creates an HTML element and adds it to a container.
 *
 * @param containerElementId Id of HTML container to receive image element
 * @param itemType Type of HTML element to create
 * @param itemId Id to assign to created HTML element
 * @param itemClasses Space-separated HTML class names to include in new item
 * @returns Created HTML item
 */
export declare function addItem(containerElementId: string, itemType: string, itemId?: string, itemClasses?: string): HTMLElement;
/**
 * Creates an unordered list of checkbox entries from a list of AGO items returned by the arcgis-rest-js library;
 * each item's title and AGO id are displayed.
 *
 * @param searchResults List of items to display
 * @param portal Portal containing items, e.g., https://www.arcgis.com; if provided, the item's id will be a link
 * to the item in AGO
 * @param itemId ID to assign to created unordered list element
 * @param includeCustom Indicates if a fill-in-the blank checkbox entry should be added to the end of the list
 * @param onChange Text to provide to each checklist element's `onChange` attribute, e.g., "myCallback(this)"
 * @returns Generated HTML
 */
export declare function createChecklist(searchResults: portal.IItem[], portal?: string, itemId?: string, includeCustom?: boolean, onChange?: string): string;
/**
 * Creates an unordered list of AGO items returned by the arcgis-rest-js library;
 * each item's title and AGO id are displayed.
 *
 * @param searchResults List of items to display
 * @param portal Portal containing items, e.g., https://www.arcgis.com; if provided, the item's id will be a link
 * to the item in AGO
 * @param itemId ID to assign to created unordered list element
 * @returns Generated HTML
 */
export declare function createSimpleList(searchResults: portal.IItem[], portal: string, itemId: string): string;
/**
 * Sets the opacity of an HTML element to "1".
 *
 * @param elementId HTML id of element to modify
 */
export declare function fadeItemIn(elementId: string): void;
/**
 * Sets the opacity of an HTML element to "0".
 *
 * @param elementId HTML id of element to modify
 */
export declare function fadeItemOut(elementId: string): void;
/**
 * Creates a UserSession.
 *
 * @param username
 * @param password
 * @param portalUrl Base url for the portal you want to make the request to; defaults
 *        to 'https://www.arcgis.com/sharing/rest'
 * @returns solutionCommon.UserSession object
 * @see @esri/arcgis-rest-auth
 * @see @esri/arcgis-rest-request
 */
export declare function getRequestAuthentication(username: string, password: string, portalUrl: string): common.UserSession;
/**
 * Removes an HTML element from the DOM.
 *
 * @param elementId HTML id of element to remove
 */
export declare function removeItem(elementId: string): void;
