import { getProp } from "../../../objects/get-prop";
import { autoAddUsers } from "../workflow-sections/auto-add-users";
import { _formatAutoAddResponse } from "./_format-auto-add-response";
/**
 * @private
 */
export function _processAutoAdd(context) {
    return autoAddUsers(getProp(context, "groupId"), getProp(context, "usersToAutoAdd"), getProp(context, "primaryRO.authentication")).then(rawResponse => _formatAutoAddResponse(rawResponse, context));
}
//# sourceMappingURL=_process-auto-add.js.map