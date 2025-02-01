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