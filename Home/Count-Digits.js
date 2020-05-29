function countDigits(str){
   return str.split("").filter(el=>Number.isFinite(Number.parseInt(el))).length;
}
