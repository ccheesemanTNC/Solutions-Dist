import { getProp } from "../objects";
import { findBy } from "../util";
import { hasBasePriv } from "./has-base-priv";
/**
 * Checks if user has access to edit an event in Hub
 * @param {IEventModel} model consolidated event model as consumed by Hub, contains the event feature, related initiative model, and attendees group
 * @param {IUser} user
 * @returns {boolean}
 */
export function canEditEvent(model, user) {
    let res = false;
    if (hasBasePriv(user)) {
        const coreTeamId = getProp(model, "initiative.item.properties.collaborationGroupId");
        const { groups = [] } = user;
        res = !!coreTeamId && !!findBy(groups, "id", coreTeamId);
    }
    return res;
}
//# sourceMappingURL=can-edit-event.js.map