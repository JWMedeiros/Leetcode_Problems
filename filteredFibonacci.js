function fibonacci (sequenceNum){
    let n1=0;
    let n2=1;
    let next=n1+n2;
    let arr=[0,1];
    
    //This gets us all the sequence nums in an array under 1M
    while (next<sequenceNum){
        arr.push(next);
        n1=n2;
        n2=next;
        next=n1+n2;
    }
    //I believe I have this correct, filter everything out that isn't divisible by 0
    arr = arr.filter(e => e%2===0);
    //Reverse it in place
    arr=arr.reverse();
    return arr;
}