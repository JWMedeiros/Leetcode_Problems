let word = 'ABACCDEFG';
// 'abCCdfdaA'
// ab19datdafF
// !@#aa

function findIndex(string) {
    for(let i = 0; i < string.length-1; i++){
        if (string[i]===string[i+1]) return i;
    }
    return -1;
}

console.log(findIndex(word))