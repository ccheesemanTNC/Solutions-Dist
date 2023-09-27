import { IAddMemberContext } from "../interfaces";
/**
 * @private
 *
 * Send email notification if an email object is present and
 * the previous invitation call was successful
 */
export declare function _processPrimaryEmail(context: IAddMemberContext): Promise<IAddMemberContext>;
