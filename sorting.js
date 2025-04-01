const unsortedArray = [5, 2, 9, 1, 5, 6];

console.log(unsortedArray.sort()); // ascending order

console.log(unsortedArray.sort((a, b) => a - b)) // ascending order

console.log(unsortedArray.sort((a, b) => b - a)) // descending order


