//Doesn't work properly, some issue here
function maxStrength(n){
    let possibleNums = new Map();
    let team=[]
    let id = n;
    let sum=0;
    let digits =[]

    while (!possibleNums.get(id)){
        digits = String(id).split('');
        sum = 0;

        for (let d of digits) {
            sum += findFactorial(digits)
        }

        possibleNums.set(id, sum);

        team.push(sum)
        id = sum
    }

    team.sort((a,b)=>a-b);
    return team[0] * team.length;
}

function findFactorial(n){
    //base
    if (n==0||n==1){
        return 1;
    //Recursive
    } else {
        return n*findFactorial(n-1)
    }
}