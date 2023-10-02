// log(n) array searching.
// This is under the assumption that the array is sorted. It will not work if it is unsorted.
function binarySearch(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;
    do {
        const m = Math.floor(lo + (hi-lo) /2);
        const v = haystack[m];

        if (v === needle){
            return true;
        } else if (v > needle) {
            hi = m;
        } else {
            // Don't look at midpoint again
            lo = m + 1;
        }
    } while (lo < hi);

    return false;
}

console.log(binarySearch([1,2,3,4,5], 4))
console.log(binarySearch([1,2,3,4,5], 1))
console.log(binarySearch([1,2,3,4,5], 6))