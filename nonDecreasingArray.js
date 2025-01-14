//  Given an integer array ARR of size N, determine if it is non-decreasing array

function isNonDecreasingArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }

    }
    return true;
}

console.log(isNonDecreasingArr([1, 1, 2, 4, 4, 3, 5])); //false;
console.log(isNonDecreasingArr([1, 2, 3, 4, 5])) // true;



// ==== Problem statement-2 ====
// Non-Decreasing Array Problem Statement Given an integer array ARR of size N,
// determine if it can be transformed into a non-decreasing array by modifying at most one element


const isNonDecreasingArr2 = (arr) => {
    let count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            count += 1;
            arr[i + 1] = arr[i];
        }

        if ((count > 1))
            return false;

    }
    return true
}


console.log(isNonDecreasingArr2([1, 1, 2, 4, 4, 3, 5])); //true; 3 is repeated only once
console.log(isNonDecreasingArr2([1, 2, 3, 4, 5])) // true; // already incrementing array
console.log(isNonDecreasingArr2([1, 1, 2, 4, 4, 3, 3, 5])); //false; 3 repeated 2 times;