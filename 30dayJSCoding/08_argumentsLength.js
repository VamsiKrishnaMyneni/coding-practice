/*
There are two primary approaches to this problem:

1. using rest parameters
2. using the arguments object
URL: https://leetcode.com/problems/return-length-of-arguments-passed/solutions/5722508/more-than-you-ever-wanted-to-know-about-this-topic/?envType=study-plan-v2&envId=30-days-of-javascript
*/

// Solution-1
(function () {

    var argumentsLength = function (...args) {
        return args?.length || 0;
    };
    console.log(argumentsLength(1, 2, 3)); // 3


    var argumentsLength2 = (...args) => args?.length || 0;

    console.log(argumentsLength2(1, 2, 3)); // 3
})();

// Solution-2
(function () {

    var argumentsLength = function () {
        return arguments?.length || 0;
    };
    console.log(argumentsLength(1, 2, 3)); // 3
})();

// Solution-3
(function () {
    // what happens if we use arguments object in a arrow function
    var argumentsLength = () => arguments?.length || 0;

    console.log(argumentsLength(1, 2, 3)); // 3
})();