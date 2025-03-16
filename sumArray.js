const sumArray = (arr) => {
    let sum = 0;
    const internal = (arr) => {
        for (let x = 0; x < arr.length; x++) {
            (Array.isArray(arr[x])) ? internal(arr[x]) : sum += arr[x];
        }
    };
    internal(arr);
    return sum;
}


console.log(sumArray([1, [2, [3, 4], 5]])); // output 15

