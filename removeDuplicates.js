const arr = [1, 2, 4, 7, 1, 5, 5, 2];
// remove the duplicate elements from the array

// solution-1

(() => {
    const result = new Set(arr);
    console.log([...result]); // Set { 1, 2, 4, 7, 5 }
})();


// solution-2
(() => {
    const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
    console.log(uniqueArr); // [ 1, 2, 4, 7, 5 ]
})();


// solution-3
(() => {
    const finalArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (!finalArr.includes(arr[i])) {
            finalArr.push(arr[i]);
        }
    }
    console.log(finalArr); // [ 1, 2, 4, 7, 5 ]
})();