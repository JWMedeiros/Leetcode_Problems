function eliminateDupes (str){
    let arr = str.split(',');
    let strObj={};
    for (let i=0;i<arr.length;i++){
        let key = arr[i];
        strObj[key]='1';
    }
    //Reuse space and set the array to be the keys of the object
    arr=Object.keys(strObj);
    str=arr.join(',');
    return str;
}