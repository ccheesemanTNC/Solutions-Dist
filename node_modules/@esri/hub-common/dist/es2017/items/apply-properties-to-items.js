/**
 * Apply a hash of properties to an array of items.
 * Extracted to simplify testing.
 * @param {array} items Array of items to apply the properties to
 * @param {object} props hash of properties to apply to the item
 */
export function applyPropertiesToItems(items, props) {
    return items.map((item) => {
        if (!item.properties) {
            item.properties = {};
        }
        Object.assign(item.properties, props);
        return item;
    });
}
//# sourceMappingURL=apply-properties-to-items.js.map