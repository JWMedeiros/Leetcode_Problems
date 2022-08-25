//Original solution (too slow)
var divide = function(dividend, divisor) {
    //Indivisible case logic
    if (dividend===0||(Math.abs(dividend)<Math.abs(divisor))){
        return 0;
    }
    
    let flag1=false;
    let flag2=false;
    if (divisor<0){
        flag1=true
        divisor = Math.abs(divisor)
    }
    if (dividend<0){
        flag2=true;
        dividend=Math.abs(dividend)
    }
    let remainder = dividend-divisor;
    let divisions=1;
    
    while (remainder>=divisor){
        remainder-=divisor;
        divisions+=1
    }
    
    //Return code logic
    if ((flag1 && flag2)||(!flag1 && !flag2)){
        if (divisions>0x7FFFFFFF){
            return 0x7FFFFFFF
        }else{
            return divisions
        }
    }
    else{
        if ((0-divisions)<-0x80000000){
            return -0x80000000
        }else {
            return 0-divisions
        }
    }
};

//Solution by emsinos1902 on Leetcode (Converts to number dividend and chops up the dividend much neater)
var divide = function(dividend, divisor) {
    if (dividend == -2147483648 && divisor == -1) return 2147483647;
    let subdividend = Math.abs(dividend)
    let subdivisor = Math.abs(divisor)
    let string_dividend = subdividend.toString()
    let i = 0
    let ans=0
    let remainder = 0
    while(i<string_dividend.length){
        remainder =remainder*10+Number(string_dividend[i])
        let quotient = Math.floor(remainder/subdivisor)
        ans = ans *10 + quotient
        remainder = remainder - quotient*subdivisor
        i++;
    }
    if((dividend >0 && divisor <0) || (dividend <0 && divisor >0)) return 0-ans
    return ans
};  