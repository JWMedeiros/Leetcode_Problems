function howManyEven (str){
    let arr = str.split(',');
    let strObj={};
    //If the number is in the object add one otherwise add key with a value of 1 to object
    for (let i=0;i<arr.length;i++){
        let key = arr[i];
        if (key in strObj){
            strObj[key]+=1;
        } else{
            strObj[key]='1';   
        }
    }
    str='';
    for (let key in strObj){
        if (strObj[key].value%2===0){
            str+= key+" appears "+strObj[key].value+" times in the list. ";
        }
    }
    return str;
}