/*
URL: https://leetcode.com/problems/function-composition/solutions/3510406/o-1-sc-learn-composition-solution-in-js-and-typescript-learn-reduceright-day-7/?envType=study-plan-v2&envId=30-days-of-javascript

what is functional composition?
*/


(function () {
    const compose = function (functions) {
        if (!Array.isArray(functions)) {
            throw 'Not an array';
        }
        if (!functions?.length) {
            return function (x) { return x; };
        }
        return function (x) {
            let result = x;
            for (let i = functions.length; i > 0; i--) {
                result = functions[i - 1](result);
            }
            return result;
        }
    };


    const fn = compose([x => x + 1, x => x * x, x => 2 * x])
    console.log(fn(4)) // 9
})();

// Solution-2

(function () {
    /**
     * @param {Function[]} functions
     * @return {Function}
     */
    var compose = function (functions) {
        if (functions.length === 0) {
            return function (x) { return x; };
        }

        return functions.reduceRight(function (prevFn, nextFn) {
            return function (x) {
                return nextFn(prevFn(x));
            };
        });

    };


    const fn = compose([x => x + 1, x => 2 * x]);
    console.log(fn(4)); // 9
})();