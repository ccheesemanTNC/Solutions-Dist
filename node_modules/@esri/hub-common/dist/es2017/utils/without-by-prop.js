/**
 * Returns a new array with all the entries have the given value
 * at the given prop location removed.
 *
 * @param prop the property
 * @param val the value
 * @param arr the array
 */
export function withoutByProp(prop, val, arr) {
    return arr.filter((e) => {
        return e[prop] !== val;
    });
}
//# sourceMappingURL=without-by-prop.js.map