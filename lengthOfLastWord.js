var lengthOfLastWord = function(s) {
    let returnWord
    let wordArr = s.split(" ")
    for(let i = wordArr.length - 1; i >= 0; i--){
        if(wordArr[i].length > 0){
            return wordArr[i].length
        }
    }
};

console.log(lengthOfLastWord("a"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))