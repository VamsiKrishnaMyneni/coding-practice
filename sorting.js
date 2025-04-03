const unsortedArray = [5, 2, 9, 1, 5, 6];
const stringArray = ["Banana", "Orange", "Apple", "Mango"];


console.log(unsortedArray.sort()); // ascending order

console.log(unsortedArray.sort((a, b) => a - b)) // ascending order

console.log(unsortedArray.sort((a, b) => b - a)) // descending order



console.log(stringArray.sort()); // ascending order 

console.log(stringArray.sort((a, b) => a.localeCompare(b))) // ascending order

console.log(stringArray.sort((a, b) => b.localeCompare(a))) // descending order



