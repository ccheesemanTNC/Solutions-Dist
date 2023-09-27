import { IModel } from "../types";
import { IItem } from "@esri/arcgis-rest-types";
interface ISerializedModel extends IItem {
    text: string;
}
/**
 * Given a model, return a serialized clone that can be sent to
 * the items api
 * @param {Object} model Item model {item:{}, data:{}}
 */
export declare function serializeModel(model: IModel): ISerializedModel;
export {};
