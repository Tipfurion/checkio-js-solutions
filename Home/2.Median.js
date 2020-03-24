function median(data) {
    let sorted = data.sort((a,b)=>a-b);
    if(sorted.length % 2 !==0){
        return sorted[Math.round(sorted.length/2)-1]
    }
    else{
        return (sorted[sorted.length/2]+sorted[sorted.length/2-1])/2
    }
}