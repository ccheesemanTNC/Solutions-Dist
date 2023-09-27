export declare type HubProduct = "premium" | "portal" | "basic";
/**
 * Gien a portal settings object, determine the hub product name
 * @param {Object} portal Portal settings object
 */
export declare function getHubProduct(portal: {
    [index: string]: any;
}): HubProduct;
