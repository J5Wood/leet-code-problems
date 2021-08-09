var reverse = function(x) {
    let neg;
    if (x < 0) neg = true;
    let str = x.toString();
    str = str.split("").reverse().join("");
    returnInt = parseInt(str);
    if (returnInt < -(2**31) || returnInt > 2**31 -1) {
        return 0;
    }
    if (!!neg) returnInt = -(returnInt)
    return returnInt
};

console.log(reverse(-25432))