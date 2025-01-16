console.log('A');

setTimeout(() => console.log('B'));

Promise.resolve().then(() => console.log('C'));

Promise.resolve().then(() => setTimeout(() => console.log('D')));

Promise.resolve().then(() => console.log('E'));

console.log('F');

setTimeout(() => console.log('G'));

// ==== output ======
// A
// F
// C
// E
// B
// G
// D


// read on event loop
// read on call stack
// read on callback queue
// read on micro, macro task queue in call back que