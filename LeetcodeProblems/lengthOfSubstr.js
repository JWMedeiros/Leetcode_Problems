//Could be more efficient

var lengthOfLongestSubstring = function(s) {
    let highestSubstr=0
    let ctr=0
    let restart=0;
    let strObj={};
    let restartFlag=false;
    //Iterate through string
    for (let i=0;i<s.length;i++){
        let key=s[i]
        //If key is in object, Compare to highest substr
        if (key in strObj){
            if (ctr>highestSubstr){
                highestSubstr=ctr;
            }
            //Wipe counter and object
            strObj={};
            ctr=0;
            restart+=1;
            i=restart-1;
            restartFlag=true;
        //Add key to object and increase counter every itteration
        }
        //Compare every time
        if (restartFlag===false){
            strObj[key]='1';
            ctr+=1;
            if (ctr>highestSubstr){
                highestSubstr=ctr;
            }
        }
        console.log(strObj)
        restartFlag=false
    }
    return highestSubstr;
};

console.log(lengthOfLongestSubstring("abc"))