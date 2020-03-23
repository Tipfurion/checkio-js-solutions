function nonUniqueElements(arr, el){
    return arr.filter(item=>item===el).length===1;
    } 
    function sort(data){
        const result=[];
        for (let i of data){
            if(!isUniq(data, i)){
                result.push(i)
            }
        }
        return result
    }