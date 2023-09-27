"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canEditEvent = void 0;
const objects_1 = require("../objects");
const util_1 = require("../util");
const has_base_priv_1 = require("./has-base-priv");
/**
 * Checks if user has access to edit an event in Hub
 * @param {IEventModel} model consolidated event model as consumed by Hub, contains the event feature, related initiative model, and attendees group
 * @param {IUser} user
 * @returns {boolean}
 */
function canEditEvent(model, user) {
    let res = false;
    if (has_base_priv_1.hasBasePriv(user)) {
        const coreTeamId = objects_1.getProp(model, "initiative.item.properties.collaborationGroupId");
        const { groups = [] } = user;
        res = !!coreTeamId && !!util_1.findBy(groups, "id", coreTeamId);
    }
    return res;
}
exports.canEditEvent = canEditEvent;
//# sourceMappingURL=can-edit-event.js.map