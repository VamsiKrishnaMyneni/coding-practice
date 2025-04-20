(function () {

    var argumentsLength = function (...args) {
        return args?.length || 0;
    };
    console.log(argumentsLength(1, 2, 3)); // 3
})();