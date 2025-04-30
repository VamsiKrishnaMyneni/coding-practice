/*
Given a function fn, return a memoized version of that function.
*/

// solution 1;

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

    // Example usage:
    let callCount = 0;
    const memoizedFn = memoize((a, b) => a + b)
    memoizedFn(2, 3) // 5
    memoizedFn(2, 3) // 5

})

    // solution 2;
    (function () {
        function memoize(fn) {
            const cache = {};
            return function (...args) {
                const key = JSON.stringify(args);
                if (cache[key]) {
                    return cache[key];
                }
                const result = fn(...args);
                cache[key] = result;
                return result;
            }
        }
    })