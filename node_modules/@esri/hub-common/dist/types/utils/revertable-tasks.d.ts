import { IRevertableTaskResult } from "../types";
/**
 * Runs the given task and returns a IRevertableTaskResult
 * @param {Function} task A task method to run
 * @param {Function} revert A method to revert the task
 * @returns {Promise<IRevertableTaskResult>}
 */
export declare const runRevertableTask: (task: (...args: any[]) => Promise<any>, revert: (...args: any[]) => Promise<any>) => Promise<IRevertableTaskResult>;
/**
 * Processes an Array of Promise<IRevertableTaskResult>. When all IRevertableTaskResult
 * are IRevertableTaskSuccess, it resolves an Array of all result values. If any
 * IRevertableTaskResult are IRevertableTaskFailed, it reverts all IRevertableTaskSuccess
 * and rejects with the first IRevertableTaskFailed error
 * @param revertableTasks
 * @returns {Promise<any[]>}
 */
export declare const processRevertableTasks: (revertableTasks: Array<Promise<IRevertableTaskResult>>) => Promise<any[]>;
