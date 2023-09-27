"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHubProduct = void 0;
const get_prop_1 = require("../objects/get-prop");
/**
 * Gien a portal settings object, determine the hub product name
 * @param {Object} portal Portal settings object
 */
function getHubProduct(portal) {
    const isPremium = get_prop_1.getProp(portal, "portalProperties.hub.enabled") || false;
    let product = isPremium ? "premium" : "basic";
    // TODO confirm w/ AGO that this is 100% bomber logic
    if (portal.isPortal && portal.portalMode === "singletenant") {
        product = "portal";
    }
    return product;
}
exports.getHubProduct = getHubProduct;
//# sourceMappingURL=get-hub-product.js.map