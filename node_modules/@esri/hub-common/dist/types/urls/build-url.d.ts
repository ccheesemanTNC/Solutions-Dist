interface IQueryParams {
    [key: string]: string;
}
/**
 * @private
 */
export declare function buildUrl(params: {
    host: string;
    path: string;
    query?: IQueryParams;
}): string;
export {};
