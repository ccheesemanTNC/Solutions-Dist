import { IItem } from "@esri/arcgis-rest-types";
export declare const categories: {
    [key: string]: string[];
};
/**
 * Is the item type downloadable in the Hub app
 * @param item ArcGIS item with type and type keywords
 */
export declare function isDownloadable(item: IItem): boolean;
