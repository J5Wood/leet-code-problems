// Just keeps track of individual rows, tracks each row as index, loops through string, index just moves up then down from 0 to height -1 to put current letter in correct row.

var convert = function(s, numRows) {
    
    let returnArr = []
    let index = 0
    let step = 1
    for(let i = 0; i < s.length; i++){
        if(returnArr[index] === undefined) returnArr[index] = ""
        returnArr[index]+= s[i]
        if(index === 0){
            step = 1
        } else if(index === numRows - 1){
            step = -1
        }
        index+= step
    }
    return returnArr.join("")
};  

console.log(convert("PAYPALISHIRING", 3))
console.log(convert("PAYPALISHIRING", 4))