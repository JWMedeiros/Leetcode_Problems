const graph = {
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
}
//Prints every node using DepthFirstSearch in a graph from a starting source node iteratively
const depthFirstPrint = (graph,source)=>{
    const stack = [source];
    while (stack.length>0){
        const current = stack.pop();
        console.log(current);
        for (let neighbor of graph[current]){
            stack.push(neighbor);
        }
    }
};

//Uses recursion with an explicit base case of having a node with no neighbor as an end point
const depthFirstPrintRecursion = (graph,source)=>{
    console.log(source);
    for (let neighbor of graph[source]){
        depthFirstPrint(graph,neighbor);
    }
};

//Can only really be done iteratively, almost exactly the same as DFS, but it changes how the elements are accessed in the array, queue vs stack
const breadthFirstPrint = (graph,source)=>{
    const queue = [source];
    while (queue.length>0){
        const current = queue.shift();
        console.log(current);
        for (let neighbor of graph[current]){
            queue.push(neighbor);
        }
    }
};

//An algorithm that determines if there is a path in your graph from src to destination node using DFS
//Assumptions are that graph is acyclic (no infinite loop)
//This has been made more robust by using a visited set to guard against infinite recursion through visited nodes
const hasPathDFS = (graph,src,dst, visited)=>{
    if (src == dst) return true;
    if (visited.has(src)) return false;
    visited.add(src);
    for (let neighbor of graph[src]){
        if (hasPathDFS(graph,neighbor,dst, visited)==true){
            return true;
        }
    }
    return false;
}

const hasPathBFS = (graph,src,dst)=>{
    const queue = [src];
    while (queue.length>0){
        const current = queue.shift();
        if (current==dst) return true;
        for (let neighbor of graph[current]){
            queue.push(neighbor);
        }
    }
    return false;
}

const undirectedPath = (edges,nodeA,nodeB)=>{
    const graph = buildGraph(edges);
    return hasPathDFS(graph,nodeA,nodeB, new Set());
}

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

const edges = [
    ['i','j'],
    ['k','i'],
    ['m','k'],
    ['k','l'],
    ['o','n']
];

//breadthFirstPrint(graph,'a');

depthFirstPrint(graph, 'a');