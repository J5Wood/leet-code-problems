var strStr = function(haystack, needle) {
    //     if(!needle) return 0
    //     let counter
        
    //     for(let i = 0; i< haystack.length; i++){
    //         counter = 0
    //         while(haystack[i + counter] === needle[counter]){
    //             counter++
    //             if(counter === needle.length) return i
    //         }
    //     }
    //     return -1
    
        if(!needle) return 0
        
        let needleReg = new RegExp(needle)
        let found = haystack.search(needleReg)
        if(found || found === 0) return found
        return -1
    };

    console.log(strStr("a","a"))
    console.log(strStr("aaaaaaa","baa"))
    console.log(strStr("hello","ll"))
    console.log(strStr("",""))