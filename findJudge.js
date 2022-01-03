var findJudge = function(n, trust) {
    let people = {}
    for(let i = 0; i < n; i++){
        people[i + 1] = true
    }
    for(let person of trust){
        if(people[person[0]]) delete people[person[0]]
    }
    if(Object.keys(people).length === 0) return -1
    let suspect = parseInt(Object.keys(people)[0])
    let counter = 0
    for(let person of trust){
        if(person[1] === suspect) counter++
    }
    return counter === n - 1 ? suspect : -1
};

console.log(findJudge(2, [[1,2]]))