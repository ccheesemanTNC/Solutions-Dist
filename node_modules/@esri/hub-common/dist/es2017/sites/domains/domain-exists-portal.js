import { _lookupPortal } from "./_lookup-portal";
/**
 * Check if an item exists with the specified domain keyword
 * @param {String} hostname to check for
 * @param {IHubRequestOptions} hubRequestOptions
 */
export function domainExistsPortal(hostname, hubRequestOptions) {
    return _lookupPortal(hostname, hubRequestOptions)
        .then((_) => {
        return true;
    })
        .catch((_) => {
        return false;
    });
}
//# sourceMappingURL=domain-exists-portal.js.map