/*
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
 */

function createCounter(init) {
    let internalNumber = init;
    const increment = () => {
        return ++internalNumber;
    }
    const decrement = () => {
        return --internalNumber;
    }
    const reset = () => {
        internalNumber = init;
        return internalNumber;
    }


    return { increment, decrement, reset }
}

const counterII = createCounter(5);
