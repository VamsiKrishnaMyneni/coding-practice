(function () {
    const reduce = function (nums, fn, init) {
        let result = init;
        if (!Array.isArray(nums)) {
            throw 'Not an array.';
        }
        for (let i = 0; i < nums.length; i++) {
            result = fn(result, nums[i]);
        }
        return result;
    };

    console.log(reduce([1, 2, 3, 4], (acc, crr) => acc + crr, 0));
})();