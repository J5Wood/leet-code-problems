var lengthOfLongestSubstring = function(s) {
    
    if(s.length === 1) return 1
    let startLetter, checkLength
    let longestSub = 0
    let checkArr
    
    for(let i = 0; i < s.length; i++){
        checkArr = [s[i]]
        for(let j = i + 1; j < s.length; j++){
            if(checkArr.includes(s[j])){
                checkLength = j - i
                break
            } else if(j === s.length - 1){
                checkLength = j - i + 1
            }
            checkArr.push(s[j])
        }
        longestSub = Math.max(longestSub, checkLength)
    }
    return longestSub
};

console.log(lengthOfLongestSubstring("abcabcbb"))