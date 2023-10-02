let items = [5,3,7,6,2,9];

//Poor performing implementation using slices
function quicksort (arr) {
    if (arr.length === 0 ){
        return [];
    }
    const pivot = arr[0];
    const left = arr.slice(1).filter(x => x < pivot);
    const right = arr.slice(1).filter(x => x >= pivot);
    return quicksort(left).concat([pivot]).concat(quicksort(right))
}


// Proper implementation function-wise
function swap(items, leftIndex, rightIndex){
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function partition(items, left, right){
    let pivot = items[Math.floor((right+left)/2)], //Grab middle element
    i = left, //Left pointer
    j = right; //Right pointer
    while (i <= j){
        while(items[i] < pivot) {
            i++;
        }
        while(items[j] > pivot) {
            j--;
        }
        if(i <= j ) {
            swap (items, i, j)
            i++;
            j--;
        }
    }
    return i
}

function quickSort(items, left, right){
    let index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if(left < index -1) { // More elements on left side of pivot
            quickSort(items, left, index - 1);
        }
        if(index < right) { // More elements on right side
            quickSort(items, index, right);
        }
    }
    return items
}

console.log(quickSort(items, 0, items.length - 1))