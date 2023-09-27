import { getProp, removeDomainByHostname, addDomain, } from "../..";
/**
 * Given two site models, determine the domain changes and apply them
 * @param currentModel
 * @param updatedModel
 * @param requestOptions
 * @private
 */
export async function handleDomainChanges(updatedModel, currentModel, requestOptions) {
    const defaultDomainRecord = {
        clientKey: updatedModel.data.values.clientId,
        orgId: requestOptions.portalSelf.id,
        orgTitle: requestOptions.portalSelf.name,
        orgKey: requestOptions.portalSelf.urlKey,
        siteId: updatedModel.item.id,
        siteTitle: updatedModel.item.title,
        sslOnly: true,
    };
    const domainChanges = {
        remove: [],
        add: [],
    };
    ["customHostname", "defaultHostname"].forEach((key) => {
        const currentValue = getProp(currentModel, `data.values.${key}`);
        const updatedValue = getProp(updatedModel, `data.values.${key}`);
        if (updatedValue !== currentValue) {
            domainChanges.remove.push(currentValue);
            domainChanges.add.push(updatedValue);
        }
    });
    const domainChangePromises = [];
    // handle additions
    domainChanges.add.map((hostname) => {
        const domainOpts = Object.assign({ hostname }, defaultDomainRecord);
        domainChangePromises.push(addDomain(domainOpts, requestOptions));
    });
    // handle removals
    domainChanges.remove.map((hostname) => {
        domainChangePromises.push(removeDomainByHostname(hostname, requestOptions));
    });
    return Promise.all(domainChangePromises);
    // TODO: Error handling & OperationStack
}
//# sourceMappingURL=handleDomainChanges.js.map