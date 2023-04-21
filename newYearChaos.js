function minimumBribes(q) {
    let swapCount=0;
    for (let i = q.length-1; i>=0;i--){
        if (q[i]!=i+1){
            if(q[i-1]==(i+1)){
                swapCount+=1;
                q=swap(q,i,i-1);
            } else if(q[i-2]==i+1){
                swapCount+=2;
                q=swap(q,i-2,i-1);
                q=swap(q,i-1,i);
            } else{
                console.log("Too chaotic");
                return;
            }
        }
    }
    console.log(swapCount);
}

function swap(arr,i,j){
    let temp = arr[i];
    arr[i]=arr[j]
    arr[j]=temp;
    return arr;
}