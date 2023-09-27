"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._formatAutoAddResponse = void 0;
const arcgis_rest_request_1 = require("@esri/arcgis-rest-request");
const get_prop_1 = require("../../../objects/get-prop");
const utils_1 = require("../../../utils");
/**
 * @private
 *
 * Coerce autoAdd response into a more similar interface as
 * the other rest calls.
 *
 * If any users are not auto added, an error is added to the response
 * and unadded users are placed into the invitation list
 */
function _formatAutoAddResponse(rawResponse, context) {
    if (rawResponse) {
        const success = !get_prop_1.getProp(rawResponse, "notAdded.length") && !rawResponse.errors;
        context.autoAddResult = { success };
        if (!success) {
            const errors = rawResponse.errors || [];
            if (get_prop_1.getProp(rawResponse, "notAdded.length")) {
                errors.push(new arcgis_rest_request_1.ArcGISRequestError(`Users not auto-added: ${rawResponse.notAdded.join(", ")}`));
            }
            context.autoAddResult.errors = errors;
            // Move unadded users to invite list;
            const unaddedUsers = context.usersToAutoAdd.filter(user => utils_1.includes(rawResponse.notAdded, user.username));
            context.usersToInvite = context.usersToInvite.concat(unaddedUsers);
        }
    }
    return context;
}
exports._formatAutoAddResponse = _formatAutoAddResponse;
//# sourceMappingURL=_format-auto-add-response.js.map