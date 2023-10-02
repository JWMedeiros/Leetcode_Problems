const grid = [
    ['W','L','W','W','W'],
    ['W','L','W','W','W'],
    ['W','w','W','L','W'],
    ['W','W','L','L','W'],
    ['L','W','W','L','L'],
    ['L','L','W','W','W'],
];

const minimumIsland = (grid)=>{
    const visited = new Set();
    let minSize = Infinity;
    for(let r=0;r<grid.length; r+=1){
        for (let c=0;c<grid[0].length; c+=1){
            const size = exploreSize(grid,r,c,visited);
            if (size>0&&size<minSize){
                minSize=size;
            }
        }
    }
    return minSize;
}

const exploreSize = (grid,r,c,visited) =>{
    const rowInbounds = 0<=r&&r<grid.length;
    const colInbounds = 0<=c&&c<grid[0].length;
    //OOB position base case
    if (!rowInbounds||!colInbounds)return 0;
    //Water Base Case
    if(grid[r][c]=='W')return 0;
    const pos = r+','+c;
    //Visited node base case
    if (visited.has(pos))return 0;
    visited.add(pos);
    let size=1; //Current position
    size+=exploreSize(grid,r-1,c,visited);
    size+=exploreSize(grid,r+1,c,visited);
    size+=exploreSize(grid,r,c-1,visited);
    size+=exploreSize(grid,r,c+1,visited);
    return size;
}