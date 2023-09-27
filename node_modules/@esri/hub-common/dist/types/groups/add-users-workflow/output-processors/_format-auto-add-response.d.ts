import { IAddGroupUsersResult } from "@esri/arcgis-rest-portal";
import { IAddMemberContext } from "../interfaces";
/**
 * @private
 *
 * Coerce autoAdd response into a more similar interface as
 * the other rest calls.
 *
 * If any users are not auto added, an error is added to the response
 * and unadded users are placed into the invitation list
 */
export declare function _formatAutoAddResponse(rawResponse: IAddGroupUsersResult, context: IAddMemberContext): IAddMemberContext;
