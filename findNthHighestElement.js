(function () {

    const findNthHighestElement = (arr, ind) => {
        // used bubble sort reverse
        let n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - 1 - i; j++) {
                if (arr[j] < arr[j + 1]) { // reversing sort
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        return arr[ind];
    }
    console.log(findNthHighestElement([1, 4, 5, 2, 6], 3))
})();