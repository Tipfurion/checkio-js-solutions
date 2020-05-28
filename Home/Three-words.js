function threeWords(str) {
    let counter = 0
    let result = false
    str.split(" ").forEach(el => {
        if(!Number(el)){
            counter++
        }
        else{
            counter=0
        }
        if(counter>=3){
            result = true
        }
    });
    return result;
}
