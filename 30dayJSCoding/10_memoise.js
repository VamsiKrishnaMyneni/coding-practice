/*
Given a function fn, return a memoized version of that function.
*/

(function () {
    function memoize(fn) {
        const cache = new Map();
        return function (...args) {
            const key = JSON.stringify(args);
            if (cache.has(key)) {
                return cache.get(key);
            }

            const result = fn(...args);
            cache.set(key, result);
            return result;
        }
    }
})