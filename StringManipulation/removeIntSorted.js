//Proper JS solution (changing length of array)
function removeDuplicates(nums) {
    for (let i=0; i<(nums.length-1);i++){
        console.log(i)
        console.log(nums)
        if (nums[i]===nums[i+1]){
            nums.splice(nums[i+1],1)
            i-=1;
        }
    }
    return nums
};

console.log(removeDuplicates([1,1,2]))