function palendromeProducts (num1, num2, num3){
    //To store any answers we will need an array of the 5 biggest products
    let prods=[];
    let temp;
    let nums=[];
    
    for (let i=num1; i>0; i--){
        for (let j=num2; j>0; j--){
            for (let a = num3; a>0;a--){
                temp=a*j*i;
                temp=isPalendrome(temp);
                if (temp){
                    prods.push(temp)
                }
            }
        }
    }
    //This gets the highest number, which we could then theoretically splice or filter out of the array, do that 5 times
    //Or push the values into a new array and then return the new array
    for (let i=0;i<5;i++){
        nums.push(Math.max(...prods));
        //This one liner is from stack overflow to filter out the number we just got
        prods = prods.filter(e => e !== Math.max(...prods));
    }
    return nums;
}


//Helper function to determine palendrome or not
//Converts number to string, checks palendrome then either sends back the palendrome number or false
function isPalendrome(num){
    num = String(num);
    let palen = num.split('').reverse().join('');
    
    if (num===palen){
        return Number(palen)
    } else{
        return false;
    }
}