"use strict";
/* tslint:disable no-console */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.Level = void 0;
/**
 * Enum for Logger Levels
 */
var Level;
(function (Level) {
    Level[Level["all"] = 0] = "all";
    Level[Level["debug"] = 1] = "debug";
    Level[Level["info"] = 2] = "info";
    Level[Level["warn"] = 3] = "warn";
    Level[Level["error"] = 4] = "error";
    Level[Level["off"] = 5] = "off";
})(Level = exports.Level || (exports.Level = {}));
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
class Logger {
    /**
     * Sets the global log level
     * @param {Level} level
     */
    static setLogLevel(level) {
        this.logLevel = level;
    }
    /**
     * Logs to debug if level is enabled
     * @param {string} message
     * @param {...*} objects additional objects to log (optional rest parameter)
     */
    static log(message, ...objects) {
        if (this.isLevelPermitted(Level.debug)) {
            console.log(message, ...objects);
        }
    }
    /**
     * Logs to debug if level is enabled
     * @param {string} message
     * @param {...*} objects additional objects to log (optional rest parameter)
     */
    static debug(message, ...objects) {
        if (this.isLevelPermitted(Level.debug)) {
            console.debug(message, ...objects);
        }
    }
    /**
     * Logs to info if level is enabled
     * @param {string} message
     * @param {...*} objects additional objects to log (optional rest parameter)
     */
    static info(message, ...objects) {
        if (this.isLevelPermitted(Level.info)) {
            console.info(message, ...objects);
        }
    }
    /**
     * Logs to warn if level is enabled
     * @param {string} message
     * @param {...*} objects additional objects to log (optional rest parameter)
     */
    static warn(message, ...objects) {
        if (this.isLevelPermitted(Level.warn)) {
            console.warn(message, ...objects);
        }
    }
    /**
     * Logs to error if level is enabled
     * @param {string} message
     * @param {...*} objects additional objects to log (optional rest parameter)
     */
    static error(message, ...objects) {
        if (this.isLevelPermitted(Level.error)) {
            console.error(message, ...objects);
        }
    }
    static isLevelPermitted(level) {
        return this.logLevel <= level;
    }
}
exports.Logger = Logger;
Logger.logLevel = Level.off;
//# sourceMappingURL=logger.js.map