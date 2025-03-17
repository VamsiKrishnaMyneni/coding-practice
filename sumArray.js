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



const sumArray2 = (arr) => {
    return arr.reduce((acc, val) => {
        return acc + (Array.isArray(val) ? sumArray2(val) : val);
    }, 0);
}


console.log(sumArray2([1, [2, [3, 4], 5]])); // output 15