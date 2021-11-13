let moveZeroes = function(nums) {
    
    let i = 0
    for(let j = i; j < nums.length; j++){
        if(nums[j] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++
        }
    }
    return nums
};

console.log(moveZeroes([0,0,1]))
console.log(moveZeroes([0,1,0,3,12]))