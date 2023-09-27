"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUniqueItemTitle = void 0;
const does_item_exist_with_title_1 = require("./does-item-exist-with-title");
/**
 * Given a title, construct a site/page title that is unique
 * if that title exists, this fn will add a number on the end, and increment until
 * an available title is found
 * @param {string} title site/page title to ensure if unique
 * @param {object} options an object that can be passed in to the q, eg. typekeywords, type
 * @param {object} authMgr auth info tells the function what url to use for the "root" of the API,
 * if missing, it will search against PROD
 * @param {number} step Number to increment. Defaults to 0
 */
function getUniqueItemTitle(title, options, authMgr, step = 0) {
    let combinedName = title;
    if (step) {
        combinedName = `${title} ${step}`;
    }
    return does_item_exist_with_title_1.doesItemExistWithTitle(combinedName, options, authMgr)
        .then(result => {
        if (result) {
            step++;
            return getUniqueItemTitle(title, options, authMgr, step);
        }
        else {
            return combinedName;
        }
    })
        .catch(e => {
        throw Error(`Error in getUniqueItemTitle ${e}`);
    });
}
exports.getUniqueItemTitle = getUniqueItemTitle;
//# sourceMappingURL=get-unique-item-title.js.map