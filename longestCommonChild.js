//These problems done purly for the sake of learning with Javaaid on youtube: https://www.youtube.com/watch?v=DuikFLPt8WQ

//Recursive Solution (Very heavy on time/memory)
//Time: O(2^(m+n))
//Space: O(m+n)
function LCSM1(s1, s2, i, j){
    //String1, string2, length of first string, length of second string
    //Starts from the top and works backwards
    if (i<=0||j<=0){
        return 0;
    }
    if (s1[i-1]==s2[j-1]){
        return 1+LCSM1(s1,s2,i-1,j-1);
    } else{
        return Math.max(LCSM1(s1,s2,i,j-1),LCSM1(s1,s2,i-1,j));
    }
}

//Recursive Solution using memoization (caching results)
//Cache declared outside
function LCSM2(s1,s2,i,j,cache){
    if (i<=0||j<=0){
        return 0;
    }
    if (cache[i][j]!=null){
        return cache[i][j];
    }
    if (s1[i-1]==s2[j-1]){
        return 1+LCSM2(s1,s2,i-1,j-1,cache);
    } else {
        return cache[i][j]= Math.max(LCSM2(s1,s2,i,j-1,cache),LCSM2(s1,s2,i-1,j,cache));
    }
}

//Create 2D array and do the bottom up approach
//Time: O(m*n)
//Space: O(m*n)
function LCSM3(s1,s2){
    let memo= Array.from({length: s1.length+1}, () => Array.from({length: s2.length+1}, () => 0));
    for (let i=0; i<=s1.length;i+=1){
        for (let j=0;j<=s2.length;j+=1){
            if (i==0||j==0){
                memo[i][j]=0;
            } else if(s1[i-1]==s2[j-1]){
                memo[i][j]=memo[i-1][j-1]+1;
            } else{
                memo[i][j]=Math.max(memo[i-1][j],memo[i][j-1]);
            }
        }
    }
    return memo[s1.length][s2.length];
}

//Most efficient solution using the bottom up approach with Dynamic Programming
//Time: O(m*n)
//Space: O(n)
function LCSM4(s1,s2){
    //This works in all cases
    let memo = Array.from({length: s2.length}, () => 0);
    for (let i=1;i<=s1.length+1;i+=1){
        let prev=0;
        for(let j=1;j<=s2.length;j+=1){
            let temp=memo[j];
            if(s1[i-1]==s2[j-1]){
                memo[j]=prev+1;
            }else{
                memo[j]=Math.max(memo[j],memo[j-1]);
            }
            prev=temp;
        }
    }
    //Return shortest string length
    console.log(memo);
    return memo[s2.length];
}

//console.log(LCSM1('ted','ted',3,3));

console.log(LCSM4('abcde','abdceee'));