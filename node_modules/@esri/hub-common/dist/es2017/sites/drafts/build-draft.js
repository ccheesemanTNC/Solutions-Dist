import { mergeObjects } from "../..";
/**
 * Builds a draft with a subset of the model properties
 * @param {*} model - item model
 * @param {*} includeList - list of property paths to include in draft object
 */
export function buildDraft(model, includeList) {
    return mergeObjects(model, {}, includeList);
}
//# sourceMappingURL=build-draft.js.map