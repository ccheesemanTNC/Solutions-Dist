import { IAddMemberContext } from "../interfaces";
/**
 * @private
 *
 * If a secondary authentication is passed in AND
 * an email object is passed in AND
 * the previous invitation call was successful:
 *
 * Send an email notification to the invited
 * users that are part of the secondary authentication's org
 */
export declare function _processSecondaryEmail(context: IAddMemberContext): Promise<IAddMemberContext>;
