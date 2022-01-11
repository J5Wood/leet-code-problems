var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let maxArea = 0
    while(left < right){
        maxArea = Math.max(maxArea, (right - left) * Math.min(height[left], height[right]))
        height[left] < height[right] ? left += 1 : right -= 1
    }
    return maxArea
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))