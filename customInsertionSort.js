(function () {

    const sort = (arr) => {
        // used bubble sort reverse
        const resultArr = [];
        for (let i = 0; i < arr.length; i++) {
            resultArr.push(arr[i]);
            const resultArrLen = resultArr.length;
            for (let j = 0; j < resultArrLen; j++) {
                if (resultArr[j] > arr[i]) {
                    [resultArr[j], resultArr[resultArrLen]] = [resultArr[resultArrLen], resultArr[i]];
                }
            }
        }

        return resultArr;
    }
    console.log(sort([5, 4, 7, 1]))
})();


// there is a feeback for this as below
/*
You're only doing one pass over resultArr, 
which means elements might get swapped only once per insertion — but for proper sorting (like insertion sort),
the newly inserted element may need to bubble backward multiple times.
*/
