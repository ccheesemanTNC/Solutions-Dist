/* Copyright (c) 2020 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Determines if a given IGroup is an update group
 * @param {IGroup} group The group to evaluate
 */
export function isUpdateGroup(group) {
    return group.capabilities.includes("updateitemcontrol");
}
//# sourceMappingURL=is-update-group.js.map