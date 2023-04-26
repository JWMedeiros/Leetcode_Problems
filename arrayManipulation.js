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

//console.log(arrayManipulation(10,[[1,5,3],[4,5,6],[6,9,1]]));

//Optimized version from Algods YT channel (Converted from C++ to JS): https://www.youtube.com/watch?v=JtJKn_c9lB4
function arrayManipulationAlgods(n,queries){
    let highestNum=0;
    //Set array size to be n+2 (Accessing n+1th element with a 1 indexed array)
    let arr = Array.from({length: n+2}, () => 0);
    for (let query of queries){
        const a = query[0];
        const b = query[1];
        const k = query[2];
        arr[a] +=k; //Add value to left index
        arr[b+1]-=k; //Subtract value from the element at b+1 index
    }
    //Prefix sum array, add all the elements left to right and update highestNum if a new one is found.
    for (let i=1; i<=n;i+=1){
        arr[i]+=arr[i-1];
        if(arr[i]>highestNum){
            highestNum=arr[i];
        }
    }
    return highestNum;
}

console.log(arrayManipulationAlgods(10,[[1,5,3],[4,5,6],[6,9,1]]));