/*
Given two promises promise1 and promise2, return a new promise. 
promise1 and promise2 will both resolve with a number. 
The returned promise should resolve with the sum of the two numbers.
*/

(function () {
    var addTwoPromises = async function (promise1, promise2) {
        const [value1, value2] = await Promise.all([promise1, promise2]);
        return value1 + value2;
    };
    // Example usage:
    addTwoPromises(Promise.resolve(3), Promise.resolve(2))
        .then(console.log);
})();

(function () {
    var addPromises = async function (...args) {
        const values = await Promise.all(args);
        return values.reduce((acc, val) => acc + val, 0);
    };
    // Example usage:
    addPromises(Promise.resolve(4), Promise.resolve(2))
        .then(console.log);
})();