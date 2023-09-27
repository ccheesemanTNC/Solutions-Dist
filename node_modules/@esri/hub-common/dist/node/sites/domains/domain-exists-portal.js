"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.domainExistsPortal = void 0;
const _lookup_portal_1 = require("./_lookup-portal");
/**
 * Check if an item exists with the specified domain keyword
 * @param {String} hostname to check for
 * @param {IHubRequestOptions} hubRequestOptions
 */
function domainExistsPortal(hostname, hubRequestOptions) {
    return _lookup_portal_1._lookupPortal(hostname, hubRequestOptions)
        .then((_) => {
        return true;
    })
        .catch((_) => {
        return false;
    });
}
exports.domainExistsPortal = domainExistsPortal;
//# sourceMappingURL=domain-exists-portal.js.map