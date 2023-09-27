import { IHubRequestOptions } from "./types";
/**
 * remote server error
 */
export declare class RemoteServerError extends Error {
    status: number;
    url: string;
    constructor(message: string, url: string, status: number);
}
/**
 * ```js
 * import { hubApiRequest } from "@esri/hub-common";
 * //
 * hubApiRequest(
 *   "/datasets",
 *   requestOptions
 * })
 *   .then(response);
 * ```
 * make a request to the Hub API
 * @param route API route
 * @param requestOptions request options
 */
export declare function hubApiRequest(route: string, requestOptions?: IHubRequestOptions): Promise<any>;
