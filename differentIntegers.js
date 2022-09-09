function returnDifferent (numsList, secondNumsList){
    let dataSet={
        firstDiff:[],
        secondDiff:[]
    };
    let numObj1={};
    let numObj2={};
    
    //Adds all numbers as a key to the numObj, duplicates don't matter for this
    for (let i=0; i<numsList.length;i++){
        let key=numsList[i];
        numObj1[key]='1';
    }
    for (let i=0; i<secondNumsList.length;i++){
        let key=secondNumsList[i];
        numObj2[key]='1';
    }
    
    //Now we iterate through each list and make a comparison lookup to the other lists object, if the key isnt in the other object
    //We are safe to say its a difference and can add it to the proper diff set. (This isn't python its just an array.)
    for (let i=0;i<numsList.length;i++){
        let key = numsList[i];
        if ((key in numObj2)===false){
            dataSet.firstDiff.push(key);
        }
    }
    for (let i=0;i<secondNumsList.length;i++){
        let key = secondNumsList[i];
        if ((key in numObj1)===false){
            dataSet.secondDiff.push(key);
        }
    }
    return dataSet;
}