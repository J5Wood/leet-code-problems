var hammingWeight = function(n) {
    let count = 0
    let x = n.toString(2).split("")
    for(let key of x){
        if(key === '1') count++
    }
    return count
};

console.log(hammingWeight(00000000000000000000000000001011))