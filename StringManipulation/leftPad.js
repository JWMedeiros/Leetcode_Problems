// An improvement on the function that brought Node.js to its knees for a day
// JK its actually slower
function leftPad2(str, len, ch) {
    if (str.length>len) { return str }
    return new Array(len-str.length).fill(!ch && ch !== 0 ? ' ' : ch).join("") + str
}

// Original LeftPad function
function leftPad(str, len, ch) {
    str = String(str);
    var i = -1;
    if (!ch && ch !==0) ch = ' ';
    len = len-str.length;
    while(++i <len){
        str = ch + str;
    }
    return str;
}

console.log(leftPad2("foo", 2))
console.log(leftPad('foo', 2))