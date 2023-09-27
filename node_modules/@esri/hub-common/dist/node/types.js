"use strict";
/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCreateItemTypes = exports.ItemType = exports.FileExtension = void 0;
/**
 * ENUM which defines File extensions.
 */
var FileExtension;
(function (FileExtension) {
    FileExtension["aptx"] = "aptx";
    FileExtension["bpk"] = "bpk";
    FileExtension["csv"] = "csv";
    FileExtension["eaz"] = "eaz";
    FileExtension["esriaddin"] = "esriaddin";
    FileExtension["esriaddinx"] = "esriaddinx";
    FileExtension["doc"] = "doc";
    FileExtension["docx"] = "docx";
    FileExtension["dlpk"] = "dlpk";
    FileExtension["featurecollection"] = "featurecollection";
    FileExtension["geojson"] = "geojson";
    FileExtension["gcpk"] = "gcpk";
    FileExtension["gpk"] = "gpk";
    FileExtension["gpkg"] = "gpkg";
    FileExtension["gpkx"] = "gpkx";
    FileExtension["insightswbk"] = "insightswbk";
    FileExtension["ipynb"] = "ipynb";
    FileExtension["jpg"] = "jpg";
    FileExtension["jpeg"] = "jpeg";
    FileExtension["json"] = "json";
    FileExtension["key"] = "key";
    FileExtension["kml"] = "kml";
    FileExtension["kmz"] = "kmz";
    FileExtension["lpk"] = "lpk";
    FileExtension["lpkx"] = "lpkx";
    FileExtension["lyr"] = "lyr";
    FileExtension["lyrx"] = "lyrx";
    FileExtension["mapx"] = "mapx";
    FileExtension["mmpk"] = "mmpk";
    FileExtension["mpk"] = "mpk";
    FileExtension["mpkx"] = "mpkx";
    FileExtension["msd"] = "msd";
    FileExtension["mspk"] = "mspk";
    FileExtension["mxd"] = "mxd";
    FileExtension["ncfg"] = "ncfg";
    FileExtension["nmc"] = "nmc";
    FileExtension["nmf"] = "nmf";
    FileExtension["numbers"] = "numbers";
    FileExtension["pages"] = "pages";
    FileExtension["pagx"] = "pagx";
    FileExtension["parquet"] = "parquet";
    FileExtension["pdf"] = "pdf";
    FileExtension["pmf"] = "pmf";
    FileExtension["png"] = "png";
    FileExtension["ppkx"] = "ppkx";
    FileExtension["ppt"] = "ppt";
    FileExtension["pptx"] = "pptx";
    FileExtension["proconfigx"] = "proconfigx";
    FileExtension["rpk"] = "rpk";
    FileExtension["rptx"] = "rptx";
    FileExtension["sd"] = "sd";
    FileExtension["slpk"] = "slpk";
    FileExtension["spk"] = "spk";
    FileExtension["stylx"] = "stylx";
    FileExtension["surveyaddin"] = "surveyaddin";
    FileExtension["sxd"] = "sxd";
    FileExtension["tif"] = "tif";
    FileExtension["tiff"] = "tiff";
    FileExtension["tpk"] = "tpk";
    FileExtension["tpkx"] = "tpkx";
    FileExtension["vsd"] = "vsd";
    FileExtension["vtpk"] = "vtpk";
    FileExtension["wmpk"] = "wmpk";
    FileExtension["wpk"] = "wpk";
    FileExtension["xls"] = "xls";
    FileExtension["xml"] = "xml";
    FileExtension["xlsx"] = "xlsx";
    FileExtension["zip"] = "zip";
    FileExtension["3dd"] = "3dd";
    FileExtension["3vr"] = "3vr";
    FileExtension["3ws"] = "3ws";
    FileExtension["rft.json"] = "rft.json";
    FileExtension["rft.xml"] = "rft.xml";
})(FileExtension = exports.FileExtension || (exports.FileExtension = {}));
/**
 * ENUM which defines human readable Item Type names
 */
var ItemType;
(function (ItemType) {
    ItemType["360 VR Experience"] = "360 VR Experience";
    ItemType["Apache Parquet"] = "Apache Parquet";
    ItemType["AppBuilder Widget Package"] = "AppBuilder Widget Package";
    ItemType["Desktop Add In"] = "Desktop Add In";
    ItemType["Explorer Add In"] = "Explorer Add In";
    ItemType["Explorer Map"] = "Explorer Map";
    ItemType["Explorer Layer"] = "Explorer Layer";
    ItemType["Windows Mobile Package"] = "Windows Mobile Package";
    ItemType["ArcGIS Pro Add In"] = "ArcGIS Pro Add In";
    ItemType["ArcGIS Pro Configuration"] = "ArcGIS Pro Configuration";
    ItemType["Globe Document"] = "Globe Document";
    ItemType["Map Document"] = "Map Document";
    ItemType["ArcPad Package"] = "ArcPad Package";
    ItemType["Published Map"] = "Published Map";
    ItemType["Scene Document"] = "Scene Document";
    ItemType["CityEngine Web Scene"] = "CityEngine Web Scene";
    ItemType["Code Sample"] = "Code Sample";
    ItemType["CSV Collection"] = "CSV Collection";
    ItemType["CSV"] = "CSV";
    ItemType["CAD Drawing"] = "CAD Drawing";
    ItemType["Deep Learning Package"] = "Deep Learning Package";
    ItemType["Desktop Application"] = "Desktop Application";
    ItemType["Desktop Application Template"] = "Desktop Application Template";
    ItemType["Desktop Style"] = "Desktop Style";
    ItemType["Earth Configuration"] = "Earth Configuration";
    ItemType["Feature Collection"] = "Feature Collection";
    ItemType["File Geodatabase"] = "File Geodatabase";
    ItemType["GeoJson"] = "GeoJson";
    ItemType["Geoprocessing Package"] = "Geoprocessing Package";
    ItemType["GeoPackage"] = "GeoPackage";
    ItemType["Geoprocessing Sample"] = "Geoprocessing Sample";
    ItemType["GML"] = "GML";
    ItemType["Image Collection"] = "Image Collection";
    ItemType["Image"] = "Image";
    ItemType["iWork Keynote"] = "iWork Keynote";
    ItemType["iWork Numbers"] = "iWork Numbers";
    ItemType["iWork Pages"] = "iWork Pages";
    ItemType["KML Collection"] = "KML Collection";
    ItemType["KML"] = "KML";
    ItemType["Layer"] = "Layer";
    ItemType["Layer Package"] = "Layer Package";
    ItemType["Layout"] = "Layout";
    ItemType["Locator Package"] = "Locator Package";
    ItemType["Map Package"] = "Map Package";
    ItemType["Map Template"] = "Map Template";
    ItemType["Microsoft Excel"] = "Microsoft Excel";
    ItemType["Microsoft Powerpoint"] = "Microsoft Powerpoint";
    ItemType["Visio Document"] = "Visio Document";
    ItemType["Microsoft Word"] = "Microsoft Word";
    ItemType["Mobile Basemap Package"] = "Mobile Basemap Package";
    ItemType["Mobile Map Package"] = "Mobile Map Package";
    ItemType["Mobile Scene Package"] = "Mobile Scene Package";
    ItemType["Notebook"] = "Notebook";
    ItemType["PDF"] = "PDF";
    ItemType["Pro Map"] = "Pro Map";
    ItemType["Pro Report"] = "Pro Report";
    ItemType["Project Package"] = "Project Package";
    ItemType["Project Template"] = "Project Template";
    ItemType["Raster function template"] = "Raster function template";
    ItemType["Rule Package"] = "Rule Package";
    ItemType["Scene Package"] = "Scene Package";
    ItemType["Service Definition"] = "Service Definition";
    ItemType["Shapefile"] = "Shapefile";
    ItemType["Survey123 Add In"] = "Survey123 Add In";
    ItemType["Tile Package"] = "Tile Package";
    ItemType["Vector Tile Package"] = "Vector Tile Package";
    ItemType["Workflow Manager Package"] = "Workflow Manager Package";
    ItemType["Document Link"] = "Document Link";
    ItemType["Feature Service"] = "Feature Service";
    ItemType["Geocoding Service"] = "Geocoding Service";
    ItemType["Geodata Service"] = "Geodata Service";
    ItemType["Geometry Service"] = "Geometry Service";
    ItemType["Geoprocessing Service"] = "Geoprocessing Service";
    ItemType["Geoenrichment Service"] = "Geoenrichment Service";
    ItemType["Globe Service"] = "Globe Service";
    ItemType["Image Service"] = "Image Service";
    ItemType["Map Service"] = "Map Service";
    ItemType["Network Analysis Service"] = "Network Analysis Service";
    ItemType["Vector Tile Service"] = "Vector Tile Service";
    ItemType["WFS"] = "WFS";
    ItemType["WMS"] = "WMS";
    ItemType["WMTS"] = "WMTS";
    ItemType["OGCFeatureServer"] = "OGCFeatureServer";
    ItemType["Scene Service"] = "Scene Service";
    ItemType["Stream Service"] = "Stream Service";
    ItemType["Workflow Manager Service"] = "Workflow Manager Service";
    ItemType["Web Mapping Application"] = "Web Mapping Application";
    ItemType["Mobile Application"] = "Mobile Application";
    ItemType["AppBuilder Extension"] = "AppBuilder Extension";
    ItemType["Google Drive"] = "Google Drive";
    ItemType["Dropbox"] = "Dropbox";
    ItemType["OneDrive"] = "OneDrive";
    ItemType["StoryMap"] = "StoryMap";
    ItemType["Dashboard"] = "Dashboard";
    ItemType["Hub Initiative"] = "Hub Initiative";
    ItemType["Hub Site Application"] = "Hub Site Application";
    ItemType["Web Experience"] = "Web Experience";
    ItemType["Insights Workbook Package"] = "Insights Workbook Package";
    ItemType["Application"] = "Application";
    ItemType["ArcGIS Explorer Application Configuration"] = "ArcGIS Explorer Application Configuration";
    ItemType["ArcMap Document"] = "ArcMap Document";
    ItemType["Layer File"] = "Layer File";
    ItemType["ogcFeature"] = "ogcFeature";
    ItemType["FeatureServer"] = "Feature Service";
    ItemType["GeocodeServer"] = "GeocodeServer";
    ItemType["GeoDataServer"] = "GeoDataServer";
    ItemType["GeometryServer"] = "GeometryServer";
    ItemType["GeoenrichmentServer"] = "GeoenrichmentServer";
    ItemType["GPServer"] = "GPServer";
    ItemType["GlobeServer"] = "GlobeServer";
    ItemType["ImageServer"] = "ImageServer";
    ItemType["MapServer"] = "MapServer";
    ItemType["NAServer"] = "NAServer";
    ItemType["ElevationServer"] = "ElevationServer";
    ItemType["VectorTileServer"] = "VectorTileServer";
    ItemType["Scene Server"] = "Scene Server";
    ItemType["StreamServer"] = "StreamServer";
    ItemType["WMServer"] = "WMServer";
    ItemType["TiledImageServer"] = "TiledImageServer";
})(ItemType = exports.ItemType || (exports.ItemType = {}));
/**
 * Maps human readable file names to extensions IE Image === jpg, png, etc
 */
exports.addCreateItemTypes = {
    "360 VR Experience": {
        fileExt: [FileExtension["3dd"]],
        type: ItemType["360 VR Experience"],
        typeKeywords: [],
    },
    "Apache Parquet": {
        fileExt: [FileExtension.parquet],
        type: ItemType["Apache Parquet"],
        typeKeywords: [],
    },
    "AppBuilder Widget Package": {
        fileExt: [FileExtension.zip],
        type: ItemType["AppBuilder Widget Package"],
        typeKeywords: [],
    },
    "Desktop Add In": {
        fileExt: [FileExtension.esriaddin],
        type: ItemType["Desktop Add In"],
        typeKeywords: [
            "Tool",
            "Add In",
            "Desktop Add In",
            "ArcGIS Desktop",
            "ArcMap",
            "ArcGlobe",
            "ArcScene",
            "esriaddin",
        ],
    },
    "Explorer Add In": {
        fileExt: [FileExtension.eaz],
        type: ItemType["Explorer Add In"],
        typeKeywords: [
            "Tool",
            "Add In",
            "Explorer Add In",
            "ArcGIS Explorer",
            "eaz",
        ],
    },
    "Explorer Map": {
        fileExt: [FileExtension.nmf],
        type: ItemType["Explorer Map"],
        typeKeywords: [
            "Map",
            "Explorer Map",
            "Explorer Document",
            "2D",
            "3D",
            "ArcGIS Explorer",
            "nmf",
        ],
    },
    "ArcGIS Explorer Application Configuration": {
        fileExt: [FileExtension.ncfg],
        type: ItemType["Explorer Map"],
        typeKeywords: [
            "Map",
            "Explorer Map",
            "Explorer Mapping Application",
            "2D",
            "3D",
            "ArcGIS Explorer",
        ],
    },
    "Explorer Layer": {
        fileExt: [FileExtension.nmc],
        type: ItemType["Explorer Layer"],
        typeKeywords: ["Data", "Layer", "Explorer Layer", "ArcGIS Explorer", "nmc"],
    },
    "Windows Mobile Package": {
        fileExt: [FileExtension.wmpk],
        type: ItemType["Windows Mobile Package"],
        typeKeywords: [],
    },
    "ArcGIS Pro Add In": {
        fileExt: [FileExtension.esriaddinx],
        type: ItemType["ArcGIS Pro Add In"],
        typeKeywords: ["Tool", "Add In", "Pro Add In", "esriaddinx"],
    },
    "ArcGIS Pro Configuration": {
        fileExt: [FileExtension.proconfigx],
        type: ItemType["ArcGIS Pro Configuration"],
        typeKeywords: [],
    },
    "Globe Document": {
        fileExt: [FileExtension["3dd"]],
        type: ItemType["Globe Document"],
        typeKeywords: [
            "Map",
            "Globe Document",
            "3D",
            "ArcGlobe",
            "ArcGIS Server",
            "3dd",
        ],
    },
    "Map Document": {
        fileExt: [FileExtension.msd],
        type: ItemType["Map Document"],
        typeKeywords: [
            "Map Document",
            "Map",
            "2D",
            "ArcMap",
            "ArcGIS Server",
            "msd",
        ],
    },
    "ArcMap Document": {
        fileExt: [FileExtension.mxd],
        type: ItemType["Map Document"],
        typeKeywords: ["Map Document", "Map", "2D", "ArcMap", "ArcGIS Server"],
    },
    "ArcPad Package": {
        fileExt: [FileExtension.zip],
        type: ItemType["ArcPad Package"],
        typeKeywords: ["Map", "Layer", "Data"],
    },
    "Published Map": {
        fileExt: [FileExtension.pmf],
        type: ItemType["Published Map"],
        typeKeywords: [
            "Map",
            "Published Map",
            "2D",
            "ArcReader",
            "ArcMap",
            "ArcGIS Server",
            "pmf",
        ],
    },
    "Scene Document": {
        fileExt: [FileExtension.sxd],
        type: ItemType["Scene Document"],
        typeKeywords: ["Map", "Scene Document", "3D", "ArcScene", "sxd"],
    },
    "CityEngine Web Scene": {
        fileExt: [FileExtension["3ws"]],
        type: ItemType["CityEngine Web Scene"],
        typeKeywords: ["3D", "Map", "Scene", "Web"],
    },
    "Code Sample": {
        fileExt: [FileExtension.zip],
        type: ItemType["Code Sample"],
        typeKeywords: ["Code", "Sample"],
    },
    "CSV Collection": {
        fileExt: [FileExtension.zip],
        type: ItemType["CSV Collection"],
        typeKeywords: [],
    },
    CSV: {
        fileExt: [FileExtension.csv],
        type: ItemType.CSV,
        typeKeywords: ["CSV"],
    },
    "CAD Drawing": {
        fileExt: [FileExtension.zip],
        type: ItemType["CAD Drawing"],
        typeKeywords: [],
    },
    "Deep Learning Package": {
        fileExt: [FileExtension.zip, FileExtension.dlpk],
        type: ItemType["Deep Learning Package"],
        typeKeywords: ["Deep Learning", "Raster"],
    },
    "Desktop Application": {
        type: ItemType["Desktop Application"],
        typeKeywords: ["Desktop Application"],
    },
    "Desktop Application Template": {
        fileExt: [FileExtension.zip],
        type: ItemType["Desktop Application Template"],
        typeKeywords: ["application", "template", "ArcGIS desktop"],
    },
    "Desktop Style": {
        fileExt: [FileExtension.stylx],
        type: ItemType["Desktop Style"],
        typeKeywords: ["ArcGIS Pro", "Symbology", "Style", "Symbols"],
    },
    "Earth Configuration": {
        fileExt: [FileExtension.xml],
        type: ItemType["Earth Configuration"],
        typeKeywords: ["ArcGIS Earth", "Earth", "Earth Configuration"],
    },
    "Feature Collection": {
        type: ItemType["Feature Collection"],
        fileExt: [FileExtension.featurecollection],
        typeKeywords: [],
    },
    "File Geodatabase": {
        fileExt: [FileExtension.zip],
        type: ItemType["File Geodatabase"],
        typeKeywords: [],
    },
    GeoJson: {
        fileExt: [FileExtension.geojson, FileExtension.json],
        type: ItemType.GeoJson,
        typeKeywords: [
            "Coordinates Type",
            "CRS",
            "Feature",
            "FeatureCollection",
            "GeoJSON",
            "Geometry",
            "GeometryCollection",
        ],
    },
    "Geoprocessing Package": {
        fileExt: [FileExtension.gpk, FileExtension.gpkx],
        type: ItemType["Geoprocessing Package"],
        typeKeywords: [
            "ArcGIS Desktop",
            "ArcGlobe",
            "ArcMap",
            "ArcScene",
            "Geoprocessing Package",
            "gpk",
            "Model",
            "Result",
            "Script",
            "Sharing",
            "Tool",
            "Toolbox",
        ],
    },
    GeoPackage: {
        fileExt: [FileExtension.gpkg],
        type: ItemType.GeoPackage,
        typeKeywords: ["Data", "GeoPackage", "gpkg"],
    },
    "Geoprocessing Sample": {
        fileExt: [FileExtension.zip],
        type: ItemType["Geoprocessing Sample"],
        typeKeywords: ["tool", "geoprocessing", "sample"],
    },
    GML: {
        fileExt: [FileExtension.zip],
        type: ItemType.GML,
        typeKeywords: [],
    },
    "Image Collection": {
        fileExt: [FileExtension.zip],
        type: ItemType["Image Collection"],
        typeKeywords: [],
    },
    Image: {
        fileExt: [
            FileExtension.jpg,
            FileExtension.jpeg,
            FileExtension.png,
            FileExtension.tif,
            FileExtension.tiff,
        ],
        type: ItemType.Image,
        typeKeywords: ["Data", "Image"],
    },
    "iWork Keynote": {
        fileExt: [FileExtension.key],
        type: ItemType["iWork Keynote"],
        typeKeywords: ["Data", "Document", "Mac"],
    },
    "iWork Numbers": {
        fileExt: [FileExtension.numbers],
        type: ItemType["iWork Numbers"],
        typeKeywords: ["Data", "Document", "Mac"],
    },
    "iWork Pages": {
        fileExt: [FileExtension.pages],
        type: ItemType["iWork Pages"],
        typeKeywords: ["Data", "Document", "Mac"],
    },
    "KML Collection": {
        fileExt: [FileExtension.zip],
        type: ItemType["KML Collection"],
        typeKeywords: [],
    },
    KML: {
        type: ItemType.KML,
        fileExt: [FileExtension.kml, FileExtension.kmz],
        typeKeywords: ["Data", "Map", "kml"],
    },
    Layer: {
        fileExt: [FileExtension.lyr],
        type: ItemType.Layer,
        typeKeywords: [
            "Data",
            "Layer",
            "ArcMap",
            "ArcGlobe",
            "ArcGIS Explorer",
            "lyr",
        ],
    },
    "Layer File": {
        fileExt: [FileExtension.lyrx],
        type: ItemType.Layer,
        typeKeywords: ["ArcGIS Pro", "Layer", "Layer File"],
    },
    "Layer Package": {
        fileExt: [FileExtension.lpk, FileExtension.lpkx],
        type: ItemType["Layer Package"],
        typeKeywords: [],
    },
    Layout: {
        fileExt: [FileExtension.pagx],
        type: ItemType.Layout,
        typeKeywords: ["ArcGIS Pro", "Layout", "Layout File", "pagx"],
    },
    "Locator Package": {
        fileExt: [FileExtension.gcpk],
        type: ItemType["Locator Package"],
        typeKeywords: [],
    },
    "Map Package": {
        fileExt: [FileExtension.mpk, FileExtension.mpkx],
        type: ItemType["Map Package"],
        typeKeywords: [],
    },
    "Map Template": {
        fileExt: [FileExtension.zip],
        type: ItemType["Map Template"],
        typeKeywords: ["map", "ArcMap", "template", "ArcGIS desktop"],
    },
    "Microsoft Excel": {
        fileExt: [FileExtension.xls, FileExtension.xlsx],
        type: ItemType["Microsoft Excel"],
        typeKeywords: ["Data", "Document", "Microsoft Excel"],
    },
    "Microsoft Powerpoint": {
        fileExt: [FileExtension.ppt, FileExtension.pptx],
        type: ItemType["Microsoft Powerpoint"],
        typeKeywords: ["Data", "Document", "Microsoft Powerpoint"],
    },
    "Visio Document": {
        fileExt: [FileExtension.vsd],
        type: ItemType["Visio Document"],
        typeKeywords: ["Data", "Document", "Visio Document"],
    },
    "Microsoft Word": {
        fileExt: [FileExtension.doc, FileExtension.docx],
        type: ItemType["Microsoft Word"],
        typeKeywords: ["Data", "Document"],
    },
    "Mobile Basemap Package": {
        fileExt: [FileExtension.bpk],
        type: ItemType["Mobile Basemap Package"],
        typeKeywords: [],
    },
    "Mobile Map Package": {
        fileExt: [FileExtension.mmpk],
        type: ItemType["Mobile Map Package"],
        typeKeywords: [],
    },
    "Mobile Scene Package": {
        fileExt: [FileExtension.mspk],
        type: ItemType["Mobile Scene Package"],
        typeKeywords: [],
    },
    Notebook: {
        fileExt: [FileExtension.ipynb],
        type: ItemType.Notebook,
        typeKeywords: ["Notebook", "Python"],
    },
    PDF: {
        fileExt: [FileExtension.pdf],
        type: ItemType.PDF,
        typeKeywords: ["Data", "Document", "PDF"],
    },
    "Pro Map": {
        fileExt: [FileExtension.mapx],
        type: ItemType["Pro Map"],
        typeKeywords: ["ArcGIS Pro", "Map", "Map File", "mapx"],
    },
    "Pro Report": {
        fileExt: [FileExtension.rptx],
        type: ItemType["Pro Report"],
        typeKeywords: [],
    },
    "Project Package": {
        fileExt: [FileExtension.ppkx],
        type: ItemType["Project Package"],
        typeKeywords: [],
    },
    "Project Template": {
        fileExt: [FileExtension.aptx],
        type: ItemType["Project Template"],
        typeKeywords: [],
    },
    "Raster function template": {
        fileExt: [FileExtension["rft.json"], FileExtension["rft.xml"]],
        type: ItemType["Raster function template"],
        typeKeywords: [
            "Raster",
            "Functions",
            "Processing",
            "rft",
            "srf",
            "function template",
            "templates",
            "ArcGIS Pro",
        ],
    },
    "Rule Package": {
        fileExt: [FileExtension.rpk],
        type: ItemType["Rule Package"],
        typeKeywords: [],
    },
    "Scene Package": {
        fileExt: [FileExtension.slpk, FileExtension.spk],
        type: ItemType["Scene Package"],
        typeKeywords: [],
    },
    "Service Definition": {
        fileExt: [FileExtension.sd],
        type: ItemType["Service Definition"],
        typeKeywords: ["Data", "Service", "Service Definition"],
    },
    Shapefile: {
        fileExt: [FileExtension.zip],
        type: ItemType.Shapefile,
        typeKeywords: ["Data", "Layer", "shapefile"],
    },
    "Survey123 Add In": {
        fileExt: [FileExtension.surveyaddin],
        type: ItemType["Survey123 Add In"],
        typeKeywords: ["Add In", "Survey123 Add In", "Tool"],
    },
    "Tile Package": {
        fileExt: [FileExtension.tpk, FileExtension.tpkx],
        type: ItemType["Tile Package"],
        typeKeywords: [],
    },
    "Vector Tile Package": {
        fileExt: [FileExtension.vtpk],
        type: ItemType["Vector Tile Package"],
        typeKeywords: [],
    },
    "Workflow Manager Package": {
        fileExt: [FileExtension.wpk],
        type: ItemType["Workflow Manager Package"],
        typeKeywords: [],
    },
    "Document Link": {
        type: ItemType["Document Link"],
        typeKeywords: ["Data", "Document"],
    },
    "Feature Service": {
        type: ItemType["Feature Service"],
        typeKeywords: [
            "ArcGIS Server",
            "Data",
            "Feature Access",
            "Feature Service",
            "Service",
            "Singlelayer",
            "Hosted Service",
        ],
    },
    GeocodeServer: {
        type: ItemType["Geocoding Service"],
        typeKeywords: [
            "ArcGIS Server",
            "Geocoding Service",
            "Locator Service",
            "Service",
            "Tool",
            "Service Proxy",
        ],
    },
    GeoDataServer: {
        type: ItemType["Geodata Service"],
        typeKeywords: ["Data", "Service", "Geodata Service", "ArcGIS Server"],
    },
    GeometryServer: {
        type: ItemType["Geometry Service"],
        typeKeywords: ["Tool", "Service", "Geometry Service", "ArcGIS Server"],
    },
    GeoenrichmentServer: {
        type: ItemType["Geoenrichment Service"],
        typeKeywords: ["Geoenrichment Service", "ArcGIS Server"],
    },
    GPServer: {
        type: ItemType["Geoprocessing Service"],
        typeKeywords: ["Tool", "Service", "Geoprocessing Service", "ArcGIS Server"],
    },
    GlobeServer: {
        type: ItemType["Globe Service"],
        typeKeywords: ["Data", "Service", "Globe Service", "ArcGIS Server"],
    },
    ImageServer: {
        type: ItemType["Image Service"],
        typeKeywords: ["Data", "Service", "Image Service", "ArcGIS Server"],
    },
    MapServer: {
        type: ItemType["Map Service"],
        typeKeywords: ["Data", "Service", "Map Service", "ArcGIS Server"],
    },
    NAServer: {
        type: ItemType["Network Analysis Service"],
        typeKeywords: [
            "Tool",
            "Service",
            "Network Analysis Service",
            "ArcGIS Server",
        ],
    },
    ElevationServer: {
        type: ItemType["Image Service"],
        typeKeywords: ["Elevation 3D Layer"],
    },
    VectorTileServer: {
        type: ItemType["Vector Tile Service"],
        typeKeywords: [],
    },
    WFS: {
        type: ItemType.WFS,
        typeKeywords: ["Data", "Service", "Web Feature Service", "OGC"],
    },
    WMS: {
        type: ItemType.WMS,
        typeKeywords: ["Data", "Service", "Web Map Service", "OGC"],
    },
    WMTS: {
        type: ItemType.WMTS,
        typeKeywords: ["Data", "Service", "OGC"],
    },
    ogcFeature: {
        type: ItemType.OGCFeatureServer,
        typeKeywords: [
            "Data",
            "Service",
            "Feature Service",
            "OGC",
            "OGC Feature Service",
        ],
    },
    SceneServer: {
        type: ItemType["Scene Service"],
        typeKeywords: ["Scene Service"],
    },
    StreamServer: {
        type: ItemType["Stream Service"],
        typeKeywords: ["Data", "Service", "Stream Service", "ArcGIS Server"],
    },
    WMServer: {
        type: ItemType["Workflow Manager Service"],
        typeKeywords: [
            "Workflow Manager",
            "ArcGIS Server",
            "WMServer",
            "Workflow",
            "JTX",
            "Job Tracking",
        ],
    },
    TiledImageServer: {
        type: ItemType["Image Service"],
        typeKeywords: ["Tiled Imagery"],
    },
    "Web Mapping Application": {
        type: ItemType["Web Mapping Application"],
        typeKeywords: [
            "JavaScript",
            "Map",
            "Mapping Site",
            "Online Map",
            "Ready To Use",
            "Web AppBuilder",
            "Web Map (+ WAB2D or WAB3D)",
        ],
    },
    "Mobile Application": {
        type: ItemType["Mobile Application"],
        typeKeywords: ["ArcGIS Mobile Map", "Mobile Application"],
    },
    "AppBuilder Extension": {
        type: ItemType["AppBuilder Extension"],
        typeKeywords: ["Widget", "App Builder"],
    },
    "Google Drive": {
        type: ItemType["Google Drive"],
        typeKeywords: ["CSV", "Shapefile", "GeoJSON", "Excel", "FileGeodatabase"],
    },
    Dropbox: {
        type: ItemType.Dropbox,
        typeKeywords: ["CSV", "Shapefile", "GeoJSON", "Excel", "FileGeodatabase"],
    },
    OneDrive: {
        type: ItemType.OneDrive,
        typeKeywords: ["CSV", "Shapefile", "GeoJSON", "Excel", "FileGeodatabase"],
    },
    "Map Service": {
        type: ItemType["Map Service"],
        typeKeywords: [
            "ArcGIS Server",
            "Data",
            "Map Service",
            "Service",
            "Hosted Service",
        ],
    },
    StoryMap: {
        type: ItemType.StoryMap,
        typeKeywords: [
            "arcgis-storymaps",
            "StoryMap",
            "Web Application (smstatusdraft or smsstatuspublished)",
        ],
    },
    Dashboard: {
        type: ItemType.Dashboard,
        typeKeywords: ["Dashboard", "Operations Dashboard"],
    },
    "Hub Initiative": {
        type: ItemType["Hub Initiative"],
        typeKeywords: ["Hub", "hubInitiative", "OpenData"],
    },
    "Hub Site Application": {
        type: ItemType["Hub Site Application"],
        typeKeywords: [
            "Hub",
            "hubSite",
            "hubSolution",
            "JavaScript",
            "Map",
            "Mapping Site",
            "Online Map",
            "OpenData",
            "Ready To Use",
            "selfConfigured",
            "Web Map",
            "Registered App",
        ],
    },
    "Web Experience": {
        type: ItemType["Web Experience"],
        typeKeywords: [
            "EXB Experience",
            "JavaScript",
            "Ready To Use Web Application",
            "Web Experience",
            "Web Mapping Application",
            "Web Page",
            "Web Site",
        ],
    },
    "Insights Workbook Package": {
        type: ItemType["Insights Workbook Package"],
        fileExt: [FileExtension.insightswbk],
        typeKeywords: ["Insights", "Insights Workbook Package"],
    },
};
//# sourceMappingURL=types.js.map