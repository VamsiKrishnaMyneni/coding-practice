/// given a string reverse the words in the string individually

// emocleW ot tpircsavaJ !dlrow


const welcomeStr = "Welcome to Javascript world!";


function reverseArrayStr(parm_str) {
    const strArr = parm_str.split(" ");
    let result = "";

    for (let i = 0; i < strArr.length; i++) {
        for (let j = strArr[i].length - 1; j >= 0; j--) {
            result += strArr[i][j];
        }
        result += " ";
    }

    return result;
}

console.log(reverseArrayStr(welcomeStr));  //emocleW ot tpircsavaJ !dlrow 