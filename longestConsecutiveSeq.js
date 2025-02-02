// Problem: 
// Given an unsorted array of integers,
// find the length of the longest consecutive elements sequence.

// Your solution should run in O(n) complexity.
// Example: with new Set() method
const longestConsecutiveSeq = (arr) => {
    let maxCount = 0;
    let numSet = new Set(arr);
    for (num of arr) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentCount = 1;
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentCount++;
            }
            maxCount = Math.max(maxCount, currentCount);
        }
    }

    return maxCount;
}


// Example usage:
const arrValue = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutiveSeq(arrValue)); // Output: 4 for (1, 2, 3, 4)


// solution: 2  O(N^3)
// using brute force approach

const longestConsecutiveSeqBruteForce = (arr) => {
    let maxCount = 0;
    for (let i = 0; i < arr.length; i++) {
        let currentCount = 1;
        let currentNum = arr[i];
        while (arr.includes(currentNum + 1)) {
            currentNum++;
            currentCount++;
        }
        maxCount = Math.max(maxCount, currentCount);
    }
    return maxCount;
}

console.log(longestConsecutiveSeqBruteForce(arrValue)); // Output: 4 for (1, 2, 3, 4)