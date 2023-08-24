function getNumber(binary) {
    let str = ''
    while (binary){
        str+=binary.data.toString()
        binary=binary.next
    }
    str = BigInt(parseInt(str, 2))
    console.log(str)
    return str
}