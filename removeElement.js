var removeElement = function(nums, val) {
    // let end = nums.length
    // let count = 0
    // for(let i = 0; i < end; i++){
    //     if(nums[i] === val){
    //         for(let j = i; j < end - 1; j++){
    //             [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
    //         }
    //         end--
    //         i--
    //     }
    // }
    // return end
    
    
    // let i = 0
    // for(let j = i; j < nums.length; j++){
    //     if(nums[j] !== val){
    //         nums[i] = nums[j]
    //         i++
    //     }
    // }
    // return i
    
    
    let left = 0
    let right = nums.length
    
    while(left < right){
        if(nums[left] === val){
            nums[left] = nums[right - 1]
            right--
        } else{
            left++
        }
    }
    console.log(nums.slice(0, right))
    return right
};

console.log(removeElement([3,2,2,3], 2))

