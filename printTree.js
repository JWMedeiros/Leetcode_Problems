function christmasTree (num){
    for (let i=1;i<=num; i++){
        let tree='';
        for (let j=1; j<=(2*num-1);j++){
            (j>=num+1-i&&j<=num-1+i) ? tree+='*': tree+=' ';
        }
        console.log(tree);
    }
}