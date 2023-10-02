const graph= {
    0:[8,1,5],
    1:[0],
    5:[0,8],
    8:[0,5],
    2:[3,4],
    3:[2,4],
    4:[3,2]
}

const largestComponent=(graph)=>{
    const visited = new Set();
    let largest=0;
    for (let node in graph){
        const size = exploreSize(graph,node, visited);
        if (size>largest){
            largest=size;
        }
    }
    return largest;
}

const exploreSize = (graph, node,visited)=>{
    if (visited.has(String(node))) return 0;
    let size=1;
    visited.add(String(node));
    for (let neighbor of graph[node]){
        size+=exploreSize(graph,neighbor,visited);
    }
    return size;
}

console.log(largestComponent(graph));