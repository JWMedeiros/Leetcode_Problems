//With help from Anand Panday on youtube: https://www.youtube.com/watch?v=SJ_C9mclZJo
function substrCount(n, s) {
    let numSubstr = s.length;
    for (let i=0; i<s.length;i+=1){
        let repeat=0;
        //Repeated characters condition
        while(i+1<s.length && s[i]==s[i+1]){
            repeat+=1;
            i+=1;
        }
        numSubstr+=(repeat*(repeat+1))/2;
        //Differing middle Character condition
        let pointer = 1;
        while(i-pointer>=0 && 
        i+pointer<s.length && 
        s[i+pointer]==s[i-1]&&
        s[i-pointer]==s[i-1]) {
            numSubstr+=1;
            pointer+=1;
        }
    }
    return numSubstr;
}