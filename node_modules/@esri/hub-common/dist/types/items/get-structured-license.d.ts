export interface IStructuredLicense {
    type: string;
    name?: string;
    text?: string;
    abbr?: string;
    url?: string;
}
export declare const STANDARD_LICENSES: {
    type: string;
    abbr: string;
    name: string;
    url: string;
}[];
/**
 * generates the structured license of an item based on its
 * configured "licenseInfo"
 * @param rawLicense an item's raw licenseInfo string
 * @returns {IStructuredLicense}
 */
export declare function getStructuredLicense(rawLicense: string): IStructuredLicense;
