let frequencySort = function(s) {
    const sObj = {}
    let returnVals = []
    for(let i = 0; i < s.length; i++){
        sObj[s[i]] ? sObj[s[i]]++ : sObj[s[i]] = 1
    }

    let maxNum = Math.max(...Object.values(sObj)) 
    while(maxNum > 0){
        
        for(let key in sObj){
            if(sObj[key] === maxNum){
                returnVals = returnVals.concat(Array(sObj[key]).fill(key))
            }
        }
        maxNum--
    }
    return returnVals.join("")
}

console.log(frequencySort("tree"))