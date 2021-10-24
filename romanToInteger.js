var romanToInt = function(s) {
    let romans = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let returnVal = 0
    let checkArray  = s.split("")
    
    for(let i = 0; i < s.length; i++){
        if(romans[s[i + 1]] > romans[s[i]]){
            returnVal += romans[s[i + 1]] - romans[s[i]]
            i++
        } else {
            returnVal += romans[s[i]]
        }
    }
    return returnVal
}

console.log(romanToInt("MCMXCIV"))

console.log(romanToInt("CDLVIII"))
