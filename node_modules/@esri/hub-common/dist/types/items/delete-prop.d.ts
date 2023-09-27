/**
 * Delete a property from an object using a deep path
 * MODIFIES PASSED TARGET
 * @param {Object} target Object from which we want to delete the property
 * @param {string} path Dotted path to the property we want to delete
 */
export declare function deleteProp(target: Record<string, any>, lookupStr: string): void;
