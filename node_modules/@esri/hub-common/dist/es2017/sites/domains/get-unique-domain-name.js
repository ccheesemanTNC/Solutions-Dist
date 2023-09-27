import { domainExists } from "./domain-exists";
/**
 * Ensure a unique domain name by checking for and incrementing
 * a subdomain
 * @param {String} subdomain Subdomain to ensure is unique
 * @param {String} baseHostname base hostname
 * @param hubRequestOptions
 * @param {Number} step Step number
 */
export function getUniqueDomainName(subdomain, baseHostname, hubRequestOptions, step = 0) {
    let combinedName = subdomain;
    if (step) {
        combinedName = subdomain + "-" + step;
    }
    const hostname = `${combinedName}-${baseHostname}`;
    return domainExists(hostname, hubRequestOptions).then((exists) => {
        // if result === true, then we need to step the name...
        if (exists) {
            const nextStep = step + 1;
            return getUniqueDomainName(subdomain, baseHostname, hubRequestOptions, nextStep);
        }
        else {
            return combinedName;
        }
    });
}
//# sourceMappingURL=get-unique-domain-name.js.map