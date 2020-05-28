function sumNumbers(str){
    const num = str.split(" ").filter(i =>Number(i)).reduce((acc,i)=>Number(acc)+Number(i),0)   
    return num;
}
