import { getWithDefault } from "../../../objects/get-with-default";
/**
 * @private
 */
export function _consolidateResults(context) {
    const { autoAddResult, inviteResult, primaryEmailResult, secondaryEmailResult } = context;
    let combinedEmailResults;
    if (primaryEmailResult || secondaryEmailResult) {
        const validResults = [primaryEmailResult, secondaryEmailResult].filter(r => r);
        const combinedSuccess = validResults.every(r => r.success);
        const combinedErrors = validResults.reduce((collection, r) => collection.concat(getWithDefault(r, "errors", [])), []);
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
//# sourceMappingURL=_consolidate-results.js.map