// Function takes in a binary target string, and determines the min number of flips of an array of all zeroes to end up with the target binary string
// Credit to sandipinstahelpers from Geeks4Geeks
function minFlips(target){
    let curr='1'
    let count=0
    for (let i=0; i<target.length; i++){
        // If curr occurs in the final string
        if (target[i]==curr){
            count++;

            curr=String.fromCharCode(48+(curr.charCodeAt()+1)%2)
        }
    }
    return count
}