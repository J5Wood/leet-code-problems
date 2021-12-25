var climbStairs = function(n) {
    if(n <= 0) return -1
    let arr = [0, 1, 2]
    for(let i = 3; i < n + 1; i++){
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[n]
}

console.log(climbStairs(0))
console.log(climbStairs(1))
console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(4))
console.log(climbStairs(5))