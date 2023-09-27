import { getProp } from "../objects/get-prop";
/**
 * Gien a portal settings object, determine the hub product name
 * @param {Object} portal Portal settings object
 */
export function getHubProduct(portal) {
    const isPremium = getProp(portal, "portalProperties.hub.enabled") || false;
    let product = isPremium ? "premium" : "basic";
    // TODO confirm w/ AGO that this is 100% bomber logic
    if (portal.isPortal && portal.portalMode === "singletenant") {
        product = "portal";
    }
    return product;
}
//# sourceMappingURL=get-hub-product.js.map