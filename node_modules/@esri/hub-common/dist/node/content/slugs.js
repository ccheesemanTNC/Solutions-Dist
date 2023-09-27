"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeContextFromSlug = exports.addContextToSlug = exports.isSlug = exports.parseDatasetId = void 0;
const utils_1 = require("../utils");
//////////////////////
// Slug Helpers
//////////////////////
/**
 * Parse item ID and layer ID (if any) from dataset record ID
 *
 * @param datasetId Hub API dataset record id ({itemId}_{layerId} or {itemId})
 * @returns A hash with the `itemId` and `layerId` (if any)
 */
function parseDatasetId(datasetId) {
    const [itemId, layerId] = datasetId ? datasetId.split("_") : [];
    return { itemId, layerId };
}
exports.parseDatasetId = parseDatasetId;
/**
 * Determine if an identifier is a Hub API slug
 *
 * @param identifier Hub API slug ({orgKey}::{title-as-slug} or {title-as-slug})
 * or record id ((itemId}_{layerId} or {itemId})
 * @returns true if the identifier is valid _and_ is **not** a record id
 */
function isSlug(identifier) {
    const { itemId } = parseDatasetId(identifier);
    if (!itemId || utils_1.isGuid(itemId)) {
        // it's either invalid, or an item id, or a dataset id
        return false;
    }
    // otherwise assume it's a slug
    return true;
}
exports.isSlug = isSlug;
/**
 * Add a context (prefix) to slug if it doesn't already have one
 *
 * @param slug Hub API slug (with or without context)
 * @param context usually a portal's orgKey
 * @returns slug with context ({context}::{slug})
 */
function addContextToSlug(slug, context) {
    // the slug has an org key already e.g. dc::crime-incidents
    if (/.+::.+/.test(slug)) {
        return slug;
        // the slug belongs to the org that owns the site e.g. crime-incidents
    }
    else {
        return `${context}::${slug}`;
    }
}
exports.addContextToSlug = addContextToSlug;
/**
 * Remove context (prefix) from a slug
 *
 * @param slug Hub API slug with context
 * @param context usually a portal's orgKey
 * @returns slug without context
 */
function removeContextFromSlug(slug, context) {
    if (context && slug.match(`^${context}::`)) {
        return slug.split(`${context}::`)[1];
    }
    else {
        return slug;
    }
}
exports.removeContextFromSlug = removeContextFromSlug;
//# sourceMappingURL=slugs.js.map