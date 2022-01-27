var generate = function(numRows) {
    let counter = 2
    let pascalArray = [[1], [1,1]]
    
    while(counter < numRows){
        let arr = pascalArray[counter - 1]
        pascalArray[counter] = [1]
        for(let i = 0; i < arr.length - 1; i++){
            pascalArray[counter].push(arr[i] + arr[i + 1])
        }
        pascalArray[counter].push(1)
        counter += 1
    }
    return pascalArray.splice(0, numRows)
};

console.log(generate(5))