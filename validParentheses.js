// ***** my attempt

let isValid = function(s) {
    let checkStack = []
    let counter = -1
    for(let i = 0; i < s.length; i++){
        if(counter === -1){
            checkStack.push(s[i])
            counter++
        } else if(s[i] === "}") {
            if(checkStack[counter] !== "{") return false
            checkStack.pop()
            counter--
        } else if (s[i] === "]") {
            if(checkStack[counter] !== "[") return false
            checkStack.pop()
            counter--
        } else if (s[i] === ")") {
            if(checkStack[counter] !== "(") return false
            checkStack.pop()
            counter--
        } else {
            checkStack.push(s[i])
            counter++
        }
    }
    return counter === -1 ? true : false
};


//  ***** other attempts

// let isValid = function(s) {
//     while (
//       s.indexOf("{}") !== -1 ||
//       s.indexOf("[]") !== -1 ||
//       s.indexOf("()") !== -1
//     ) {
//       s = s.replace("()", "");
//       s = s.replace("{}", "");
//       s = s.replace("[]", "");
//     }
//     return s === "";
//   };

  // * --------------------------
  // * less memory

//   var isValid = function(s) {
        
//     if (s.length ==0 || s.length%2 != 0){
//         return false;
//     }
    
//     const closingParentheses = Object.freeze({
//         "(": ")",
//         "{": "}",
//         "[": "]"
//     });
    
//     const stack = [];
    
//     for (let i=0; i<s.length; i++) {
//         if (s[i] in closingParentheses) {
//             stack.push(s[i]);
//         }else if( s[i] != closingParentheses[stack.pop()]) {
//             return false;
//         }
//     }
    
//     return stack.length == 0;
// };

// * ----------------------



console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))
console.log(isValid("([)]"))
console.log(isValid("{[]}"))