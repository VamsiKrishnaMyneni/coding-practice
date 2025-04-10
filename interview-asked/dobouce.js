(() => {
    const debounce = (fn, delay) => {
        let timer = null;
        return function (...args) {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                fn.apply(this, args);
            }, delay);
        }
    }

    const run = debounce((val) => {
        console.log(val);
    }, 300);


    run('debounce1');
    run('debounce2');
})();