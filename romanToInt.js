let str="MCMXCIV"

var romanToInt = function(s) {
    let total=0;
    let flag=false;
    
    for (let i=0;i<s.length;i++){
        flag=false
        if (i+1<s.length){
            if(s[i]==='I'&&s[i+1]==='V'){
                total+=4;
                i+=1;
                flag=true;
            } else if (s[i]==='I'&&s[i+1]==='X'){
                total+=9;
                i+=1;
                flag=true;
            } else if (s[i]==='X'&&s[i+1]==='L'){
                total+=40;
                i+=1;
                flag=true;
            }else if (s[i]==='X'&&s[i+1]==='C'){
                total+=90;
                i+=1;
                flag=true;
            }else if (s[i]==='C'&&s[i+1]==='D'){
                total+=400;
                i+=1;
                flag=true;
            }else if (s[i]==='C'&&s[i+1]==='M'){
                total+=900;
                i+=1;
                flag=true;
            }
        }
        if(flag===false){
            switch (s[i]){
            case 'M':
                total+=1000;
                break;
            case 'D':
                total+=500;
                break;
            case 'C':
                total+=100;
                break;
            case 'L':
                total+=50;
                break;
            case 'X':
                total+=10;
                break;
            case 'V':
                total+=5;
                break;
            default:
                total+=1;
                break;
            }
        }
    }
    return total;
};