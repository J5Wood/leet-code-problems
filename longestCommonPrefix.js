var longestCommonPrefix = function(strs) {
    let checkVal
    let breakLoop = false
    let returnStr = ""
    let checkStr = strs[0]
    
    for(let i = 0; i < checkStr.length; i++){
        checkVal = {}
        for(let j = 1; j < strs.length; j++){
            if(strs[j][i] !== checkStr[i]){
                breakLoop = true
                break
            }
        }
        if(breakLoop) break
        returnStr += checkStr[i]
    }
    return returnStr
};

console.log(longestCommonPrefix(
    ["flower","flow","flight"]
))