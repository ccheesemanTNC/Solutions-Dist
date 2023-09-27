"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUniqueDomainNamePortal = void 0;
const domain_exists_portal_1 = require("./domain-exists-portal");
/**
 * Ensure a unique domain name by checking for and incrementing
 * a subdomain
 * @param {String} subdomain Subdomain to ensure is unique
 * @param {IHubRequestOptions} hubRequestOptions
 * @param {*} step Step number
 */
function getUniqueDomainNamePortal(subdomain, hubRequestOptions, step = 0) {
    let combinedName = subdomain;
    if (step) {
        combinedName = subdomain + "-" + step;
    }
    // now we search for existing items w/ this...
    return domain_exists_portal_1.domainExistsPortal(combinedName, hubRequestOptions).then((exists) => {
        if (exists) {
            const nextStep = step + 1;
            return getUniqueDomainNamePortal(subdomain, hubRequestOptions, nextStep);
        }
        else {
            return combinedName;
        }
    });
}
exports.getUniqueDomainNamePortal = getUniqueDomainNamePortal;
//# sourceMappingURL=get-unique-domain-name-portal.js.map