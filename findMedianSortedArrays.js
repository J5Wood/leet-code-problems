var findMedianSortedArrays = function(nums1, nums2) {
    
    let evenLength = false
    let counter1 = 0
    let counter2 = 0
    let evenAdjuster = 0
    let length = nums1.length + nums2.length
    let returnNum, middle2

    if(length % 2 === 0){
        evenLength = true
        evenAdjuster = 1
    }

    //merge lists together until middle is found, stop just before mid point
    for(let i = 0; i < Math.floor(length / 2) - evenAdjuster ; i++){
        if(!nums2[counter2] && nums2[counter2] !== 0 || nums1[counter1] < nums2[counter2]){
            counter1++
        } else {
            counter2++
        }
    }
    
    // grabs next lowest num from arrays
    function getMiddleNum() {
        if(!nums2[counter2] && nums2[counter2] !== 0 || nums1[counter1] < nums2[counter2]){
            counter1++
            return nums1[counter1 - 1]
        } else {
            counter2++
            return nums2[counter2 - 1]
        }
    }
    
    // return val is next lowest num for odd arr
    returnNum = getMiddleNum()
    
    // grab next num and average if even arr
    if(evenLength){
        middle2 = getMiddleNum()
        returnNum = (returnNum + middle2) / 2
    } 
    
    return returnNum
};
console.log(findMedianSortedArrays([2,3,4,5], []))
