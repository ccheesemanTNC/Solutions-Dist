/**
 * Deep set function. Like Ember.set, but smarter as it will create the path
 * @param {Object} target Object we want to set the property on
 * @param {String} path Dotted path to the property we want to set
 * @param {Any} value Value we want to assign to the property
 */
export declare function deepSet(target: Record<string, any>, path: string, value?: any): void;
