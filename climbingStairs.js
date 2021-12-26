var climbStairs = function(n, memo = [0,1,2]) {
    
    // recursive memoized
    
    if(n < 0) return 0
    if(memo[n]) return memo[n]
    memo[n] = climbStairsMemoized(n - 1, memo) + climbStairsMemoized(n - 2, memo)
    return memo[n]
        
        
    // recursive naive, too slow, many duplicate calls

    // if(n <= 0) return 0
    // if(n === 1) return 1
    // if(n === 2) return 2
    // return climbStairs(n - 1) + climbStairs(n - 2)
    

    // iterative

    // if(n <= 0) return -1
    // let arr = [0, 1, 2]
    // for(let i = 3; i < n + 1; i++){
    //     arr[i] = arr[i - 1] + arr[i - 2]
    // }
    // return arr[n]
};

console.log(climbStairs(0))
console.log(climbStairs(1))
console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(4))
console.log(climbStairs(5))
console.log(climbStairs(6))

console.time('Time: ')
climbStairs(7)
console.timeEnd('Time: ')

console.time('Time: ')
climbStairs(45)
console.timeEnd('Time: ')