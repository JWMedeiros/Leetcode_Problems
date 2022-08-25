 var twoSum = function(nums, target) {
    let foundNums={};
    let solutionPositions=[];
    
    //Iterate numbers array
    for (let i=0;i<nums.length;i++){
        let key=target-nums[i]
        
        //If target-nums[i] is in object, Then we have the answers.
        if (key in foundNums){
            solutionPositions.push(foundNums[key]);
            solutionPositions.push(i)
            return solutionPositions
        }
        
        //Otherwise add key to object with position as value
        foundNums[nums[i]]=i;
    }
};