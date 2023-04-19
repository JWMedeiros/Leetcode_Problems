const graph = {
    0:[0,1,5],
    1:[0],
    5:[0,8],
    8:[0,5],
    2:[3,4],
    3:[2,4],
    4:[3,2]
}

//Problem that takes adjacency list of an undrected graph, and returns the amount of connected components in the graph
const connectedComponentsCount=(graph)=>{
    const visited = new Set();
    let count = 0;
    for (let node in graph){
        if (explore(graph,node,visited)){
            count+=1;
        }
    }
    return count;
}

//Explores graph and marks nodes as visited, unless the component is visited then it returns false;
//Once all neighbors are explored, returns true;
const explore = (graph, current,visited)=>{
    if (visited.has(String(current))) return false;
    visited.add(String(current));
    for (let neighbor of graph[current]){
        explore(graph,neighbor,visited);
    }
    return true;
}

console.log(connectedComponentsCount(graph));