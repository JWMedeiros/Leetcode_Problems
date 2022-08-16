let note='aaa'
let magazine='abcdefghaaa'

var canConstruct = function(ransomNote, magazine) {
    for (note of ransomNote){
        let flag=false;
        for (let i=0; i<magazine.length;i++){
            //If letter is found replace it with nothing
            if (note===magazine[i]){
                magazine=magazine.replace(magazine[i],'')
                flag=true;
                break;
            }
        }
        //No letter found
        if (flag===false){
            return false;
        }
    }
    //If every letter in note is identified
    return true;
};

console.log(canConstruct(note, magazine))