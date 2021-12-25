var mySqrt = function(x) {
    let counter = 0
    let checkSum = 0
    while(checkSum <= x){
        counter++
        checkSum = counter * counter
    }
    return counter - 1
}

console.log(mySqrt(4))
console.log(mySqrt(5))
console.log(mySqrt(6))
console.log(mySqrt(10))
console.log(mySqrt(100))