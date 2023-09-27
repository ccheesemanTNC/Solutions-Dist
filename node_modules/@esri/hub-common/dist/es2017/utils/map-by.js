/**
 * Map over an array returning the specified property for each entry
 * @param {String} prop Property to extracct
 * @param {Array} arr array of objects
 */
export function mapBy(prop, arr = []) {
    return arr.map((e) => e[prop]);
}
//# sourceMappingURL=map-by.js.map