//  soulution-1
//  Implement throttle function that will limit the number of times a function can be called in a given period.
(() => {
    const throttle = (fn, delay) => {
        let last = 0;
        return function (...args) {
            const now = new Date().getTime();
            if ((now - last) >= delay) {
                last = now;
                fn.apply(this, args);
            }
        }
    }

    const run = throttle((val) => {
        console.log(val);
    }, 300);


    run('throttle1-solution1');
    run('throttle2-solution2');

})();


// solution-2

(() => {
    const throttle = (fn, delay) => {
        let flag = true;
        return function (...args) {
            if (flag) {
                fn.apply(this, args);
                flag = false;
                setTimeout(() => {
                    flag = true;
                }, delay);
            }
        }
    }
    const run = throttle((val) => {
        console.log(val);
    }, 300);

    run('throttle1-solution2');
    run('throttle2-solution2');
})();