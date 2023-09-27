/**
 * Determines if the provided Feature Service item is a
 * Fieldworker View
 * @param {IItem} featureServiceItem
 * @returns {boolean}
 */
export function isFieldworkerView(featureServiceItem) {
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
//# sourceMappingURL=is-fieldworker-view.js.map