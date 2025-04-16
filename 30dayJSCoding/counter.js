// build a counter that increments the given number by +1 on every button click


function counter(num) {
    return function () {
        return num++;
    }
}

const invokeCounter = counter(0);