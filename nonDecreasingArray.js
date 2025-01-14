//  Given an integer array ARR of size N, determine if it is non-decreasing array

function isNonDecreasingArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }

    }
    return true;
}

console.log(checkNonDecreasingArrayPossibility([1, 1, 2, 4, 4, 3, 5])); //false;
console.log(checkNonDecreasingArrayPossibility([1, 2, 3, 4, 5])) // false;



// ==== Problem statement-2 ====
// Non-Decreasing Array Problem Statement Given an integer array ARR of size N,
// determine if it can be transformed into a non-decreasing array by modifying at most one element


const isNonDecreasingArr2 = (arr) => {

}