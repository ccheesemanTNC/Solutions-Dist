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
/**
 * Gets a formatted (nested HTML `ol`s) display of a solution template's items.
 *
 * @param itemId Id of a solution template
 * @param authentication Credentials for the request to AGO
 * @returns HTML showing hierarchy
 */
export declare function getFormattedItemHierarchy(itemId: string, authentication: common.UserSession): Promise<string>;
