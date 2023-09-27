/**
 * Remove empty properties from an object graph
 * @param {Object} obj Object to remove empty/null properties from
 */
export declare function removeEmptyProps(obj: {
    [index: string]: any;
}): {
    [index: string]: any;
};
