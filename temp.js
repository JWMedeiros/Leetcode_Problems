// Create dictionary with numbers as keys and amount of reaccuring numbers as values
for (let num of arr){
    let key = num.toString()
    if (nums.hasOwnProperty(key)){
        let temp
        temp = parseInt(nums[key])+1
        nums[key] = temp.toString()
    } else {
        nums[key]='1'
    }
}