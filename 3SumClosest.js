var threeSumClosest = function(nums, target) {

       // smarter approach. Can do 2 pointer style system by using one for loop for 1st point and doing pointer system on remaining array for 2nd and 3rd points
    let left, right
    let closestSum = Infinity
    nums.sort((a, b) => a - b)

    for(let i = 0; i < nums.length - 2; i++){
        left = i + 1
        right = nums.length - 1
        
        while(left < right){
            let checkSum = nums[i] + nums[left] + nums[right]
            if(Math.abs(checkSum - target) < Math.abs(closestSum - target)) closestSum = checkSum
            
            if(checkSum < target){
                left++
            } else if(checkSum > target){
                right--
            } else {
                break
            }
        }
    }
    
    // Brute Force approach
    // let closestSum = Infinity
    // for(let i = 0; i < nums.length; i++){
    //     for(let j = i + 1; j < nums.length; j++){
    //         for(let k = j + 1; k < nums.length; k++){
    //             let checkSum = nums[i] + nums[j] + nums[k]
    //             if(Math.abs(checkSum - target) < Math.abs(closestSum - target)){
    //                 closestSum = checkSum
    //             }
    //         }
    //     }
    // }
    return closestSum
};

console.log(threeSumClosest([-1,2,1,-4], 1))
console.log(threeSumClosest([-1,2,1,-4], -3))
console.log(threeSumClosest([-1,2,1,-4], 10))
console.log(threeSumClosest([-1,2,1,-4], -10))