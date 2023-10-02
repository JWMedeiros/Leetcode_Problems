let num = 5;

function findFactorial(n) {
    //base
    if (n==0||n==1) return 1;
    
    return n*findFactorial(n-1)
}

console.log(findFactorial(num));