import { getWithDefault } from "../objects/get-with-default";
export const getSubscriptionType = (portalSelf) => {
    return getWithDefault(portalSelf, "subscriptionInfo.type", "Enterprise");
};
//# sourceMappingURL=get-subscription-type.js.map