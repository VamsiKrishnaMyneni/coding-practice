function example() {
    for (var i = 0; i < 5; i++) {
        setTimeout(function () {
            console.log(i); // output 5, 5, 5, 5, 5
        }, 1000);
    }
}

example();

// The output is 5, 5, 5, 5, 5. The reason is that the function inside setTimeout is executed after the loop has finished.
// The variable i has a value of 5, and it is the same for all the functions inside setTimeout.
//  To fix this issue, you can use let instead of var in the for loop. The let keyword creates a new variable for each iteration of the loop.


function example2() {
    for (let i = 0; i < 5; i++) {
        setTimeout(function () {
            console.log(i); // output 0, 1, 2, 3, 4
        }, 1000);
    }
}

function example3() {
    for (var i = 0; i < 5; i++) {
        (function (i) {
            setTimeout(function () {
                console.log(i); // output 0, 1, 2, 3, 4
            }, 1000);
        })(i);
    }
}

function example4() {
    for (var i = 0; i < 5; i++) {
        let a = i;
        setTimeout(function () {
            console.log(a); // output 0, 1, 2, 3, 4
        }, 1000 * i);
    }
}