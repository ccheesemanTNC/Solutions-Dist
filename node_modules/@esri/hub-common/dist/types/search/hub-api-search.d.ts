import { DatasetResource, IHubRequestOptions } from "..";
/**
 * Search the Hub API
 *
 * @param requestOptions
 * @returns JSONAPI response
 */
export declare function hubApiSearch(requestOptions: IHubRequestOptions): Promise<{
    data: DatasetResource[];
}>;
