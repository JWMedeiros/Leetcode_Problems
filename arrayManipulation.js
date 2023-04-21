//This works but needs optimization

function arrayManipulation(n, queries) {
    let highestNum=0;
    let list =[];
    for (let i=0;i<n;i+=1){
        list.push(0);
    }
    //Perform Operations
    for(let query of queries){
        for(let x = query[0]-1;x<query[1];x+=1){
            list[x]+=query[2];
        }
    }
    for(let i=0;i<n;i+=1){
        if(list[i]>highestNum){
            highestNum=list[i];
        }
    }
    return highestNum;
}

console.log(arrayManipulation(10,[[1,5,3],[4,5,6],[6,9,1]]));