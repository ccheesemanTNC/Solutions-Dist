import { batch } from "../utils/batch";
const MAX_NUM = 100;
/**
 * Fetches all the pages in a search request
 * @param {SearchFunction} searchFunc
 * @param {ISearchOptions} opts
 * @param {number} limit
 * @param {batchSize} number of concurrent requests at a time
 * @returns {Promise<SearchableType[]>}
 */
export function fetchAllPages(searchFunc, opts, limit = -1, batchSize) {
    const pageSize = opts.num || MAX_NUM;
    const firstStart = opts.start || 1;
    // If a limit is provided, we don't have to use the first request to get the
    // total count before sending things off to batch(). So instead we fake the first
    // response just to set things up.
    const promise = limit === -1
        ? searchFunc(Object.assign(Object.assign({}, opts), { num: pageSize, start: firstStart }))
        : Promise.resolve({
            nextStart: firstStart,
            total: limit,
            results: [],
            num: pageSize
        });
    return promise
        .then(firstResponse => {
        // no more requests needed, return the first response
        if (firstResponse.nextStart === -1)
            return [firstResponse];
        // generate batch requests for the remaining pages to fetch
        const starts = [];
        for (let i = firstResponse.nextStart; i <= firstResponse.total; i += pageSize) {
            starts.push(i);
        }
        const batchSearchFunc = (start) => searchFunc(Object.assign(Object.assign({}, opts), { start, num: pageSize }));
        return batch(starts, batchSearchFunc, batchSize).then(responses => [
            firstResponse,
            ...responses
        ]);
    })
        .then(responses => {
        // merge all the search results into a single array
        const results = responses.reduce((acc, response) => [
            ...acc,
            ...response.results
        ], []);
        // discard results beyond the limit if applicable
        const clipLimit = limit === -1 ? results.length : limit;
        return results.slice(0, clipLimit);
    });
}
//# sourceMappingURL=fetch-all-pages.js.map