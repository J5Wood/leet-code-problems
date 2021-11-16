var divide = function(dividend, divisor) {
    let divid = Math.abs(dividend)
    let divis = Math.abs(divisor)
    let counter = 0
    
    if(Math.abs(divisor) === 1) {
        counter = Math.abs(dividend)
    } else {
        while(divid >= divis){
            divid -= divis
            counter++
        }
    }
    if(divisor > 0 && dividend < 0 || divisor < 0 && dividend > 0) counter = -Math.abs(counter)
    if(counter > (2**31) - 1) counter = (2**31) - 1
    if(counter < -(2**31)) counter = -(2**31)
    return counter
};

console.log(divide(-2147483648, -1))
console.log(divide(1, -1))
console.log(divide(1, 1))
console.log(divide(7, -3))