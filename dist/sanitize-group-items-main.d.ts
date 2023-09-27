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
import * as common from "@esri/solution-common";
/**
 * Fetches the items in a group sanitizes their base portions.
 *
 * @param groupId Group to search
 * @param authentication Credentials for the request
 * @returns Promise resolving to a list of screened group items
 */
export declare function sanitizeGroupItems(groupId: string, searchString: string, additionalSearchOptions: common.IAdditionalGroupSearchOptions, authentication: common.UserSession): Promise<common.IItem[]>;
