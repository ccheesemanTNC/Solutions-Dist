"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubscriptionType = void 0;
const get_with_default_1 = require("../objects/get-with-default");
exports.getSubscriptionType = (portalSelf) => {
    return get_with_default_1.getWithDefault(portalSelf, "subscriptionInfo.type", "Enterprise");
};
//# sourceMappingURL=get-subscription-type.js.map