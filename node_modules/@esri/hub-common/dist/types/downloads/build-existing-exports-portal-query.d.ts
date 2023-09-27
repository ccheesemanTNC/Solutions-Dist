import { ISpatialReference } from "@esri/arcgis-rest-types";
export declare const WGS84_WKID = "4326";
export declare const PORTAL_EXPORT_TYPES: {
    csv: {
        name: string;
        itemTypes: string[];
        supportsProjection: boolean;
    };
    kml: {
        name: string;
        itemTypes: string[];
        supportsProjection: boolean;
    };
    shapefile: {
        name: string;
        itemTypes: string[];
        supportsProjection: boolean;
    };
    fileGeodatabase: {
        name: string;
        itemTypes: string[];
        supportsProjection: boolean;
    };
    geojson: {
        name: string;
        itemTypes: string[];
        supportsProjection: boolean;
    };
    excel: {
        name: string;
        itemTypes: string[];
        supportsProjection: boolean;
    };
    featureCollection: {
        name: string;
        itemTypes: string[];
        supportsProjection: boolean;
    };
};
interface IExistingExportsPortalQueryOptions {
    layerId?: number | string;
    onlyTypes?: string[];
    spatialRefId?: string;
}
/**
 * Puts a spatial reference into a serialized format that can be used
 * for item typeKeywords.
 *
 * **Note**: discards "latestWkid"
 *
 * In the past we used `JSON.stringify`, but that causes problems because
 * it can include commas which are interpreted by the portal [update item call](https://developers.arcgis.com/rest/users-groups-and-items/update-item.htm)
 * as being separate typekeywords. With `JSON.stringify`, equality was also
 * dependent on the order of the properties in the spatial reference.
 *
 * Check https://developers.arcgis.com/web-map-specification/objects/spatialReference/
 * for more details on what this object looks like.
 */
export declare function serializeSpatialReference(spatialReference: ISpatialReference | string): string;
/**
 * Builds the Portal API query string to search for exports from a given dataset
 *
 * @param itemId - The dataset ID
 * @param options - A set of options including item types, layerId, and spatialRefId
 * @returns
 */
export declare function buildExistingExportsPortalQuery(itemId: string, options?: IExistingExportsPortalQueryOptions): string;
/**
 * Generates typekeyword for identifying which spatialRefId an export is
 * @param spatialRefId - either a WKID, WKT, or stringified ISpatialReference
 * @private
 */
export declare function getSpatialRefTypeKeyword(spatialRefId: string): string;
/**
 * Returns the keyword identifying exports by the item they originate from
 * @param itemId - ID for the item from which the export originated
 * @private
 */
export declare function getExportItemTypeKeyword(itemId: string): string;
/**
 * Returns the keyword identifying exports by the layer they originate from
 * @param layerId - ID for the layer from which the export originated
 * @private
 */
export declare function getExportLayerTypeKeyword(layerId?: number | string): string;
export {};
