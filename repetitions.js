const str = 'javascript';

const getRepetitions = (str) => {
    const count = {};

    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        if (count[letter]) {
            count[letter]++;
        } else {
            count[letter] = 1;
        }
    }
    return count;
}

console.log(getRepetitions(str))

// Output: { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }
