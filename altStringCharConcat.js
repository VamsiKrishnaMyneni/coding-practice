// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.

//Example:
let word1 = 'abc',
    word2 = 'pqrr';

function addStralternatively(str1, str2) {
    let resultStr = "";
    let maxLength = Math.max(str1.length, str2.length);
    for (let i = 0; i < maxLength; i++) {
        if (i < str1.length) resultStr += str1[i];
        if (i < str2.length) resultStr += str2[i];
    }
    return resultStr;
}
console.log(addStralternatively(word1, word2));

// Output: "apbqcr"
