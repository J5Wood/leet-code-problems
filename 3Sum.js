var threeSum = function(nums) {

    // optimized, continues loops if any num is same as last. 
    // With sorted list this has the added benefit of no duplicates

    let returnArr = []
    nums.sort((a, b) => a - b)
    
    for(let i = 0; i < nums.length - 2; i++){
        if(i > 0 && nums[i] === nums[i - 1]) continue
        let left = i + 1
        let right = nums.length - 1
        
        while(left < right){
            let checkSum = nums[i] + nums[left] + nums[right]
            if(checkSum === 0){

                let checkArr = [nums[i], nums[left], nums[right]]
                returnArr.push(checkArr)
                left++
                while(nums[left] === nums[left - 1] && left < right) left++
            } else if(checkSum < 0){
                left++   
            } else {
                right--
            } 
        }
    }
    return returnArr


    // First attempt

    // let returnArr = []
    // let checkObj = {}
    // nums.sort((a, b) => a - b)
    
    // for(let i = 0; i < nums.length - 2; i++){
    //     let left = i + 1
    //     let right = nums.length - 1
        
    //     while(left < right){
    //         let checkSum = nums[i] + nums[left] + nums[right]
    //         if(checkSum === 0){

    //             let checkArr = [nums[i], nums[left], nums[right]]
    //             if(!checkObj[checkArr.join("")]) {
    //                 checkObj[checkArr.join("")] = true
    //                 returnArr.push(checkArr)
    //             }
    //         }
    //         if(checkSum < 0){
    //             left++   
    //         } else {
    //             right--
    //         } 
    //     }
    // }
    // return returnArr
};

console.log(...threeSum([-1,0,1,2,-1,-4]))
console.log(...threeSum([0,0,0,0]))
console.log(...threeSum([-7,-4,3,3,4,5,5]))
