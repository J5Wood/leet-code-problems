var removeDuplicates = function(nums) {
    // *** naive ***
    // for(let i = 0; i < nums.length; i++){
    //     if(nums[i] === nums[i + 1]){
    //         nums.splice(i + 1, 1)
    //         i--
    //     }
    // }
    // return nums.length

    // *** smart ***
    
    if(nums.length === 0) {
        return 0
    }
    let result = 1, i = 0, j = 1;
    
    while(i < nums.length && j < nums.length) {
        if(nums[j] === nums[i]) {
            j++;
        } else {
            result += 1;
            i++;
            nums[i] = nums[j];
            j++;
        }
    }
    return result;
};

console.log(removeDuplicates([1,1,2]))