//Wish I could see the test case to see why this is failing, considering it works in every other scenario except 10 billion 5s haha.
function subsetA(arr) {
    arr.sort( function(x, y){
        return x - y;
    } );
    let a = [arr.pop()]
    let aTotal=sumArr(a)
    let bTotal=sumArr(arr)
    while (aTotal<bTotal){
        a.unshift(arr.pop())
        aTotal=sumArr(a)
        bTotal=sumArr(arr)
    }
    return a
}

function sumArr(arr){
    let total=0;
    for (let i=0; i< arr.length;i++){
        total+=arr[i]
    }
    return total;
}