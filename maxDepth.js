var maxDepth = function(root) {  
    let max = 0
    
    function findDepth(node, depth = 1){
        if(node.left) findDepth(node.left, depth + 1)
        if(node.right) findDepth(node.right, depth + 1)
        max = Math.max(max, depth)
    }
    
    if(root) findDepth(root)
    return max
};
