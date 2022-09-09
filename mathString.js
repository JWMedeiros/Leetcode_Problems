function mathString (str){
    let sequence=str.split(' ');
    let ans = sequence[0];
    
    //I believe this would work out like this assuming all the conditions above, we now have all the numbers and signs stored
    //IN ORDER, and this first sets the first number, checks the sign, adds or subtracts the next number and skips the next iteration
    //This way we are only checking math operations. It goes to length-1 as the last number will be used in calculation.
    for (let i=1;i<sequence.length-1;i++){
        if (sequence[i]==='+'){
            ans+=sequence[i+1];
            i+=1;
        } else if (sequence[i]==='-'){
            ans-=sequence[i+1];
            i+=1;
        }
    }
    return ans;
}