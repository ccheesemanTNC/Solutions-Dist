import { IRequestOptions } from "@esri/arcgis-rest-request";
import { IItem } from "@esri/arcgis-rest-types";
/**
 * Create a slug, namespaced to an org
 * Typically used to lookup items by a human readable name in urls
 *
 * @param title
 * @param orgKey
 * @returns
 */
export declare function constructSlug(title: string, orgKey: string): string;
/**
 * Adds/Updates the slug typekeyword
 * Returns a new array of keywords
 * @param typeKeywords
 * @param slug
 * @returns
 */
export declare function setSlugKeyword(typeKeywords: string[], slug: string): string[];
/**
 * Get an item by searching for items with a typeKeyword like `slug|{slug-value}`
 *
 * For example, if you pass a slug `"snow-map"` into this function, it will
 * search for items with `slug|snow-map` in it's typeKeywords array,
 *
 * @param slug
 * @param requestOptions
 * @returns
 */
export declare function getItemBySlug(slug: string, requestOptions: IRequestOptions): Promise<IItem>;
/**
 * Find items by slug typeKeywords.
 *
 * Optional exclude parameter accepts the id of an item we expect to
 * have this particular slug. This is used during update calls
 * where we don't know if the slug specifically has been updated, but we
 * don't want a false-postive from the item we are updating
 *
 * @param slug
 * @param requestOptions
 * @returns
 */
export declare function findItemsBySlug(slugInfo: {
    slug: string;
    exclude?: string;
}, requestOptions: IRequestOptions): Promise<IItem[]>;
/**
 * Given a slug, search for items using that slug, incrementing the slug name until
 * a unique value is found
 *
 * For example, if a slug of `"snow-map"` into this function and some item exists
 * with that slug, it would return `"snow-map-1"`.
 *
 * @param slug
 * @param requestOptions
 * @param step
 * @returns
 */
export declare function getUniqueSlug(slugInfo: {
    slug: string;
    existingId?: string;
}, requestOptions: IRequestOptions, step?: number): Promise<string>;
