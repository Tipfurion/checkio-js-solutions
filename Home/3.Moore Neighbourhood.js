function countNeighbours(data, row, col) {
    let arr = []        
                
    if(row-1>=0){
        arr.push(data[row-1][col])
        if(col-1>=0){
            arr.push(data[row-1][col-1])
        }

    }
    if(col-1>=0){
        arr.push(data[row][col-1])
                
    }
    if(row+1<data.length){
        arr.push(data[row+1][col])
        if(col+1<data[0].length){
            arr.push(data[row+1][col+1]) 
        }
        if(col-1>=0){
            arr.push(data[row+1][col-1])
        }
    }
    if(col+1<data[0].length){
        arr.push(data[row][col+1])
        if(row-1>=0){
            arr.push(data[row-1][col+1])
        }  
    }
    let result = arr.reduce((sum,i)=>sum+i)
    return result;
}