
function weakPoint(matrix){
    let rowSums = []
    let colSums = []
    let rowPlusCol =[]
    for(let i=0; i<matrix.length;i++){
        const rowSum = matrix[i].reduce((sum,i)=>(sum+i))
        rowSums.push(rowSum)  
        const arrCol = matrix.map(j => j[i]);
        const colSum = arrCol.reduce((sum,i)=>(sum+i))
        colSums.push(colSum)     
    }
    let rowMin = rowSums.reduce((iMin, x, i, arr) => x < arr[iMin] ? i : iMin, 0);
    let colMin = colSums.reduce((iMin, x, i, arr) => x < arr[iMin] ? i : iMin, 0);
    return [rowMin, colMin]
    }   


