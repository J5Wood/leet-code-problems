var singleNumber = function(nums) {

    // uses XOR bitwise operator, incredibly memory efficient.

    return nums.reduce((prev, curr) => prev ^ curr);
    

    // naive solution

    // let checkObj = {}
    // for(let i = 0; i < nums.length; i++){
    //     if(checkObj[nums[i]]){
    //         delete checkObj[nums[i]]
    //     } else {
    //         checkObj[nums[i]] = true
    //     }
    // }
    // return Object.keys(checkObj)[0]
};

console.log(singleNumber([4,1,2,1,2]))
console.log(singleNumber([2,2,1]))