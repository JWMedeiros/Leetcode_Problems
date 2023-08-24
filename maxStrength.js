//Doesn't work properly, some issue here
function maxStrength(n){
    let maxStrength=0
    let team=[]
    team.push(n)
    let stringNum=''

    for (let i=0; i<team.length; i++){
        let totalNum=0;
        stringNum=team[i].toString();
        stringNum = splitIntoArray(stringNum);
        //This doesnt work for numbers
        for (let digit in stringNum){
            console.log(digit);
            totalNum+=findFactorial(digit);
        }
        if (totalNum<1000000){
            team.push(totalNum);
        }
    }

    team.sort((a,b)=>a-b);
    maxStrength=team[-1]*10;
    return maxStrength;
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

function splitIntoArray(num){
    return Array.from(String(num), Number)
}