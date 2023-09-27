/**
 * Enum for Logger Levels
 */
export declare enum Level {
    all = 0,
    debug = 1,
    info = 2,
    warn = 3,
    error = 4,
    off = 5
}
/**
 * ```js
 * import { Logger, Level } from '@esri/hub-common'
 * ```
 * Functions share the console interface
 * ```js
 * Logger.log('My Message');
 * Logger.warn('Watch out!', { threat: 'Charizard' });
 * // etc, etc
 * ```
 * Available logging levels are specified in the Level enum. The hierarchy is as follows:
 * ```
 * off > error > warn > info > debug > all
 * ```
 * Logger only sends messages whose level is greater than or equal to the global log level
 * ```js
 * // Global level is 'warn'
 * Logger.info('This message won't log');
 * Logger.error('But this one will!');
 * ```
 * Logger's default level is 'off', so set desired level before use
 * ```js
 * Logger.setLogLevel(Level.all);
 * ```
 */
export declare class Logger {
    private static logLevel;
    /**
     * Sets the global log level
     * @param {Level} level
     */
    static setLogLevel(level: Level): void;
    /**
     * Logs to debug if level is enabled
     * @param {string} message
     * @param {...*} objects additional objects to log (optional rest parameter)
     */
    static log(message: string, ...objects: any[]): void;
    /**
     * Logs to debug if level is enabled
     * @param {string} message
     * @param {...*} objects additional objects to log (optional rest parameter)
     */
    static debug(message: string, ...objects: any[]): void;
    /**
     * Logs to info if level is enabled
     * @param {string} message
     * @param {...*} objects additional objects to log (optional rest parameter)
     */
    static info(message: string, ...objects: any[]): void;
    /**
     * Logs to warn if level is enabled
     * @param {string} message
     * @param {...*} objects additional objects to log (optional rest parameter)
     */
    static warn(message: string, ...objects: any[]): void;
    /**
     * Logs to error if level is enabled
     * @param {string} message
     * @param {...*} objects additional objects to log (optional rest parameter)
     */
    static error(message: string, ...objects: any[]): void;
    private static isLevelPermitted;
}
