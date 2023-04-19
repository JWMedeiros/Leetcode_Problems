const edges=[
    ['w','x'],
    ['x','y'],
    ['z','y'],
    ['z','v'],
    ['w','v']
]

//Helper function to convert edge list into adjacency list
const buildGraph=(edges)=>{
    const graph = {};
    for (let edge of edges){
        const [a,b] = edge;
        if (!(a in graph)) graph[a]=[];
        if (!(b in graph)) graph[b]=[];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

//BFS algorithm to find the shortestPath between two nodes, or returns -1 if no path found
const shortestPath = (edges,nodeA,nodeB)=>{
    const graph = buildGraph(edges);
    const visited = new Set([nodeA]);
    const queue=[[nodeA,0]];

    while (queue.length>0){
        const [node,distance] = queue.shift();
        if (node==nodeB) return distance;
        for (let neighbor of graph[node]){
            if (!visited.has(neighbor)){
                visited.add(neighbor);
                queue.push([neighbor, distance+1]);
            }
        }
    }
    return -1;
}

console.log((buildGraph(edges)))