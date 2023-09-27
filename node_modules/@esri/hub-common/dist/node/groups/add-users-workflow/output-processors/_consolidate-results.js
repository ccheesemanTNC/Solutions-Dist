"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._consolidateResults = void 0;
const get_with_default_1 = require("../../../objects/get-with-default");
/**
 * @private
 */
function _consolidateResults(context) {
    const { autoAddResult, inviteResult, primaryEmailResult, secondaryEmailResult } = context;
    let combinedEmailResults;
    if (primaryEmailResult || secondaryEmailResult) {
        const validResults = [primaryEmailResult, secondaryEmailResult].filter(r => r);
        const combinedSuccess = validResults.every(r => r.success);
        const combinedErrors = validResults.reduce((collection, r) => collection.concat(get_with_default_1.getWithDefault(r, "errors", [])), []);
        combinedEmailResults = {
            success: combinedSuccess
        };
        if (combinedErrors.length) {
            combinedEmailResults.errors = combinedErrors;
        }
    }
    const overallSuccess = [autoAddResult, inviteResult, combinedEmailResults]
        .filter(r => r)
        .every(r => r.success);
    return {
        success: overallSuccess,
        autoAdd: autoAddResult,
        invite: inviteResult,
        email: combinedEmailResults
    };
}
exports._consolidateResults = _consolidateResults;
//# sourceMappingURL=_consolidate-results.js.map