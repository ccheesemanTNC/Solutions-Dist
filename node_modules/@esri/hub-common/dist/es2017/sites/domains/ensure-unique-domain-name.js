import { getUniqueDomainNamePortal } from "./get-unique-domain-name-portal";
import { getUniqueDomainName } from "./get-unique-domain-name";
import { _ensureSafeDomainLength } from "./_ensure-safe-domain-length";
import { stripProtocol } from "../../urls";
import { getHubApiUrl } from "../..";
/**
 * Given a subdomain, ensure that we have a unique hostname
 * incrementing if needed
 * @param {String} subdomain Subdomain to unique-ify
 * @param {IHubRequestOptions} hubRequestOptions
 */
export function ensureUniqueDomainName(subdomain, hubRequestOptions) {
    let prms;
    if (hubRequestOptions.isPortal) {
        prms = getUniqueDomainNamePortal(subdomain, hubRequestOptions);
    }
    else {
        const baseDomain = `${hubRequestOptions.portalSelf.urlKey}.${stripProtocol(getHubApiUrl(hubRequestOptions))}`;
        prms = getUniqueDomainName(subdomain, baseDomain, hubRequestOptions);
    }
    return prms.then((uniqueDomain) => {
        return _ensureSafeDomainLength(uniqueDomain, hubRequestOptions.portalSelf.urlKey);
    });
}
//# sourceMappingURL=ensure-unique-domain-name.js.map