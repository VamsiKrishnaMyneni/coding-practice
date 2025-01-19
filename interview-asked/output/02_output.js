(function () {
    const arr = [1, 2, 3, 4, 5];

    const result = arr.filter((item, index) => {
        arr.pop();
        return item % 2 === 0;
    });
    console.log(result);
})();