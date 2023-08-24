//This function also only works in some cases and needs work.
function getTotalEfficiency(skill){
    let average =0;
    let totalEfficiency=0

    if (skill.length %2 !==0){
        return -1
    }

    //Find Average
    for (let i=0; i<skill.length; i++){
        average+=skill[i];
    }
    average=average/2;

    let pairs=[]
    for(let i=0; i<skill.length; i++){
        for (let j=i+1; j<skill.length; j++){
            if (skill[i]+skill[j]===average){
                pairs.push([skill[i], skill[j]])
                break;
            }
        }
    }

    if (pairs.length<skill.length/2){
        return -1
    } else {
        for(let pair of pairs){
            console.log(pair);
            totalEfficiency+=pair[0]+pair[1]
        }
    }

    return totalEfficiency;
}