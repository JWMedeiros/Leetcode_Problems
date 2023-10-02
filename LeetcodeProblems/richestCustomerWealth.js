function maximumWealth(accounts) {
    let highest=0
    for (let i=0;i<accounts.length;i++){
        let total=0;
        for (num of accounts[i]){
            total+=num;
        }
        if (total>highest){
            highest=total;
        }
    }
    return highest;
};