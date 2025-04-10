(function () {
    const jsWorldStr = "Welcome to Javascript world!";

    function reverseStr(parm_str) {
        let result = "";

        for (let i = parm_str.length - 1; i >= 0; i--) {
            result += parm_str[i];
        }
        return result;
    }

    console.log(reverseStr(jsWorldStr));  //!dlrow tpircsavaJ ot emocleW
})()