let arr = [3,5,1,2,8,6]

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j<arr.length; j++){
            if (arr[i]<arr[j]){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j]=temp
            }
        }
    }
    return arr
}

console.log(bubbleSort(arr))