"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._processAutoAdd = void 0;
const get_prop_1 = require("../../../objects/get-prop");
const auto_add_users_1 = require("../workflow-sections/auto-add-users");
const _format_auto_add_response_1 = require("./_format-auto-add-response");
/**
 * @private
 */
function _processAutoAdd(context) {
    return auto_add_users_1.autoAddUsers(get_prop_1.getProp(context, "groupId"), get_prop_1.getProp(context, "usersToAutoAdd"), get_prop_1.getProp(context, "primaryRO.authentication")).then(rawResponse => _format_auto_add_response_1._formatAutoAddResponse(rawResponse, context));
}
exports._processAutoAdd = _processAutoAdd;
//# sourceMappingURL=_process-auto-add.js.map