// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.

//Example:
let word1 = 'abc',
    word2 = 'pqrr';

function addStralternatively(str1, str2) {
    let largeStr = str1;
    let remain = '';
    if (str1 > str2) {
        largeStr = str2;
        remain = str1.slice(str2.length);
    }
    if (str2 > str1) {
        largeStr = str1;
        remain = str2.slice(str1.length);
    }
    const resultStr = [];
    for (let i = 0; i < largeStr.length; i++) {
        resultStr.push(str1[i], str2[i]);
    }
    resultStr.push(remain);
    return resultStr.join('');
}
console.log(addStralternatively(word1, word2));

// Output: "apbqcr"
