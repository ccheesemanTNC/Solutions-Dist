/**
 * Parse item ID and layer ID (if any) from dataset record ID
 *
 * @param datasetId Hub API dataset record id ({itemId}_{layerId} or {itemId})
 * @returns A hash with the `itemId` and `layerId` (if any)
 */
export declare function parseDatasetId(datasetId: string): {
    itemId: string;
    layerId?: string;
};
/**
 * Determine if an identifier is a Hub API slug
 *
 * @param identifier Hub API slug ({orgKey}::{title-as-slug} or {title-as-slug})
 * or record id ((itemId}_{layerId} or {itemId})
 * @returns true if the identifier is valid _and_ is **not** a record id
 */
export declare function isSlug(identifier: string): boolean;
/**
 * Add a context (prefix) to slug if it doesn't already have one
 *
 * @param slug Hub API slug (with or without context)
 * @param context usually a portal's orgKey
 * @returns slug with context ({context}::{slug})
 */
export declare function addContextToSlug(slug: string, context: string): string;
/**
 * Remove context (prefix) from a slug
 *
 * @param slug Hub API slug with context
 * @param context usually a portal's orgKey
 * @returns slug without context
 */
export declare function removeContextFromSlug(slug: string, context: string): string;
