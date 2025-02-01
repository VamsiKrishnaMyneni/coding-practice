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
const arr = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutiveSeq(arr)); // Output: 4 for (1, 2, 3, 4)