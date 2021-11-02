var longestPalindrome = function(s) {
    
    let maxStr = s[0]
    for(let i = 0; i < s.length; i++){
        let checkStr1 = findMaxStr(i, i, s)
        let checkStr2 = findMaxStr(i, i + 1, s)
        let checkStr = checkStr1.length > checkStr2.length ? checkStr1 : checkStr2
        maxStr = checkStr.length > maxStr.length ? checkStr : maxStr
    }
    
    function findMaxStr(leftIdx, rightIdx, str){
        let checkStr = ""
        while(leftIdx >= 0 && rightIdx < str.length){
            if(str[leftIdx] === str[rightIdx]){
                checkStr = str.slice(leftIdx, rightIdx + 1)
                leftIdx--
                rightIdx++
            }
            else {
                break
            }
        }
        return checkStr
    }
    
    return maxStr
}

console.log(longestPalindrome("babad"))