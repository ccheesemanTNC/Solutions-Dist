/* Copyright (c) 2020 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Runs the given task and returns a IRevertableTaskResult
 * @param {Function} task A task method to run
 * @param {Function} revert A method to revert the task
 * @returns {Promise<IRevertableTaskResult>}
 */
export const runRevertableTask = (task, revert) => {
    return task()
        .then(results => {
        return {
            status: "fullfilled",
            results,
            revert
        };
    })
        .catch(error => {
        return { status: "rejected", error };
    });
};
/**
 * Processes an Array of Promise<IRevertableTaskResult>. When all IRevertableTaskResult
 * are IRevertableTaskSuccess, it resolves an Array of all result values. If any
 * IRevertableTaskResult are IRevertableTaskFailed, it reverts all IRevertableTaskSuccess
 * and rejects with the first IRevertableTaskFailed error
 * @param revertableTasks
 * @returns {Promise<any[]>}
 */
export const processRevertableTasks = (revertableTasks) => {
    return Promise.all(revertableTasks).then(results => {
        const isFullfilled = (result) => result.status === "fullfilled";
        const successfulTasks = results.filter(isFullfilled);
        const failedTasks = results.filter((result) => !isFullfilled(result));
        if (failedTasks.length) {
            const reverts = successfulTasks.map(task => task.revert());
            // fire & forget
            /* tslint:disable no-empty */
            Promise.all(reverts).catch(() => { });
            /* tslint:enable no-empty */
            throw failedTasks[0].error;
        }
        const returnResults = successfulTasks.map((result) => result.results);
        return returnResults;
    });
};
//# sourceMappingURL=revertable-tasks.js.map