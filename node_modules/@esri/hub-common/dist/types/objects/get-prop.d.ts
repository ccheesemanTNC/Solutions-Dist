/**
 * Get a property out of a deeply nested object
 * Does not handle anything but nested object graph
 */
export declare function getProp(obj: {
    [index: string]: any;
}, path: string): any;
