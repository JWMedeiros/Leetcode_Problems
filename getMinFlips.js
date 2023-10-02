function getMinFlips(pwd) {
    let count =0;
    let flag =false
    for (let i = 0; i<pwd.length-1; i++){
        if (flag===true){
            flag=false
        }
        else if (pwd[i]!==pwd[i+1]){
            count ++;
            flag=true;
        }
    }
    return count
}