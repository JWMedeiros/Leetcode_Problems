let nums: number[] = [1,2,2,3,9,7,0,4]

// Re-written in TS, but also every iteration gets smaller as the last element no longer needs to be checked.
function optimizedBubbleSort(arr: number[]): number [] {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}

nums = optimizedBubbleSort(nums)
console.log(nums)