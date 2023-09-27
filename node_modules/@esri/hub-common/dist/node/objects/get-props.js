"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProps = void 0;
const get_prop_1 = require("./get-prop");
/**
 * Given an array of prop paths, return all the values that exist, in an array
 */
function getProps(obj, props) {
    return props.reduce((a, p) => {
        const v = get_prop_1.getProp(obj, p);
        if (v) {
            a.push(v);
        }
        return a;
    }, []);
}
exports.getProps = getProps;
//# sourceMappingURL=get-props.js.map