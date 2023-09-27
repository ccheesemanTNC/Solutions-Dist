"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFieldworkerView = void 0;
/**
 * Determines if the provided Feature Service item is a
 * Fieldworker View
 * @param {IItem} featureServiceItem
 * @returns {boolean}
 */
function isFieldworkerView(featureServiceItem) {
    const hasTypekeyword = (typeKeyword) => featureServiceItem.typeKeywords.indexOf(typeKeyword) > -1;
    // Survey123 only recently added the "FieldworkerView" typekeyword
    let isFieldworker = hasTypekeyword("FieldworkerView");
    // we should support previously created fieldworkers too
    if (!isFieldworker) {
        const hasExpectedTypeKeywords = [
            "Survey123",
            "Feature Service",
            "View Service",
        ].every(hasTypekeyword);
        isFieldworker =
            hasExpectedTypeKeywords && !hasTypekeyword("StakeholderView");
    }
    return isFieldworker;
}
exports.isFieldworkerView = isFieldworkerView;
//# sourceMappingURL=is-fieldworker-view.js.map