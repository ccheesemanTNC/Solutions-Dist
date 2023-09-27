"use strict";
/* Copyright (c) 2020 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUpdateGroup = void 0;
/**
 * Determines if a given IGroup is an update group
 * @param {IGroup} group The group to evaluate
 */
function isUpdateGroup(group) {
    return group.capabilities.includes("updateitemcontrol");
}
exports.isUpdateGroup = isUpdateGroup;
//# sourceMappingURL=is-update-group.js.map