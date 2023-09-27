import { IHubContent } from "../core";
import { ItemOrServerEnrichment } from "../items/_enrichments";
import { IHubRequestOptions } from "../types";
interface IFetchItemAndEnrichmentsOptions extends IHubRequestOptions {
    enrichments?: ItemOrServerEnrichment[];
}
export interface IFetchContentOptions extends IFetchItemAndEnrichmentsOptions {
    layerId?: number;
    siteOrgKey?: string;
}
/**
 * Fetch enriched content from the Portal and Hub APIs.
 * @param identifier content slug or id
 * @param options Request options with additional options to control how the content or enrichments are fetched
 * @returns A content object composed of the backing item and enrichments
 *
 * ```js
 * import { fetchContent } from '@esri/hub-common'
 * // fetch content by slug
 * const content = await fetchContent('my-org::item-name')
 * ```
 */
export declare const fetchContent: (identifier: string, options?: IFetchContentOptions) => Promise<IHubContent>;
export {};
