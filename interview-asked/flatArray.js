const input = [1, [2, [3, 4], 5]];


const flatArray = (arr) => {
    const result = [];
    const internal = (arr) => {
        for (let x = 0; x < arr.length; x++) {
            (!Array.isArray(arr[x])) ? result.push(arr[x]) : internal(arr[x]);
        }
    }
    internal(arr);
    return result;
};


console.log(flatArray(input)); // output [1, 2, 3, 4, 5]


const flatArray2 = (arr) => {
    return arr.reduce((acc, val) => {
        return acc.concat(Array.isArray(val) ? flatArray2(val) : val);
    }, []);
}

console.log(flatArray(input)); // output [1, 2, 3, 4, 5]