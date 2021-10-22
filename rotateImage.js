var rotate = function(matrix) {
    
    // grab current num
    // set next point to current num, and current num to next
    let currentNum = matrix[startRow][startCol]
    
    
    let startRow = 0;
    let startCol = 0;
    let endRow = matrix.length;
    let endCol = matrix[0].length;
    let placeholder
    
    
    let numsLength = endRow * endCol


    // set starting row and column to 0, end row and column to lengths
    
    // after every revolution, ++ starts, -- ends
    
    // *******You're moving by one space, move by whole row or column****
    
    
    // start at starting row move everything up by column
    
    
    placeholder = (matrix[startRow][startCol])
    for(let i = startRow; i < endCol - 1; i++){
        [matrix[startRow][startCol + 1], placeholder] = [placeholder, matrix[startRow][startCol + 1]]
    }
    
    // once ending column, move everything up by row
    // once end row move everything down by col
    // once start column move everything down by row
    
};