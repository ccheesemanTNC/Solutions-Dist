import { IUser } from "@esri/arcgis-rest-types";
import { IInitiativeModel } from "../types";
export interface IEventModel {
    initiative: IInitiativeModel;
    [propName: string]: any;
}
/**
 * Checks if user has access to edit an event in Hub
 * @param {IEventModel} model consolidated event model as consumed by Hub, contains the event feature, related initiative model, and attendees group
 * @param {IUser} user
 * @returns {boolean}
 */
export declare function canEditEvent(model: IEventModel, user: IUser): boolean;
