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

//breadthFirstPrint(graph,'a');

depthFirstPrint(graph, 'a');