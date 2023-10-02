// Given two crystal balls that will break if dropped from high enough distance,
// determine the exact spot in which it will break in the most optimized way.

// This problem has a search runtime of sqrt(n)
function twoCrystalBall(breaks: boolean[]): number {
    const jumpAmt = Math.floor(Math.sqrt(breaks.length));

    // Use first crystal ball to see where it breaks
    let i = jumpAmt;
    for(; i<breaks.length; i+=jumpAmt) {
        if (breaks[i]) {
            break;
        }
    }

    i-=jumpAmt;
    for (let j = 0; j < jumpAmt && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}

console.log(twoCrystalBall([false,false,false,false,false,true,true,true,true]))