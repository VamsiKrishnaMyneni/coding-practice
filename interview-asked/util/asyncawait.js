(function () {
    async function foo() {
        console.log('1');
        await console.log('2');
        console.log('3');
    }
    console.log('4');
    foo();
    console.log('5');

    // output 4 1 5 2 3 
    /** 
a) Code execution starts with "4" .
b) Call foo , console log "1" then "2" will send to microtask queue and it will resolve at once .
c) As soon as "2" gets printed, await will pause the function execution without blocking the main thread, so "5" will be in call stack ready to be executed.
d) Once "5" executed, event loop will add "3" in the empty call stack .
So the sequence is 4 1 2 5 3 .
If await would be added "1", then execution will halt after "1" and output will be 4 1 5 2 3 .
     */
})();