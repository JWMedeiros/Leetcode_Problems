//An algorithm that determines if there is a path in your graph from src to destination node using DFS
//Assumptions are that graph is acyclic (no infinite loop), unless you use visited
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