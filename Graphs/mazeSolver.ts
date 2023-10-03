// Any object with string keys and number values
type Point = Record<string, number>;

const dir = [
    [-1,0],
    [1,0],
    [0,-1],
    [0,1],
];

const maze = [
    "xxxxxxxxxx x",
    "x        x x",
    "x        x x",
    "x xxxxxxxx x",
    "x          x",
    "x xxxxxxxxxx",
]

function walk(maze: String[], wall: String, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
    // 1. Base Case
    // off the map
    if (curr.x < 0 || curr.x >= maze[0].length ||
        curr.y < 0 || curr.y >= maze.length) { return false; }
    
    // on a wall
    if (maze[curr.y][curr.x] === wall){ return false; }

    // destination found
    if (curr.x == end.x && curr.y === end.y) { 
        path.push(end)
        return true; 
    }

    // if been to position already
    if(seen[curr.y][curr.x]) { return false; }

    // 3 parts of recursion
    // pre
    seen[curr.y][curr.x] = true;
    path.push(curr);
    // recurse
    for (let i=0; i<dir.length; i++){
        const [x,y] = dir[i];
        if (walk(maze,wall,{
            x: curr.x + x,
            y: curr.y + y
        }, end, seen, path)) {
            return true;
        }
    }
    // post
    path.pop();
    return false;
}

function solve(maze: string[], wall: string, start: Point, end: Point): Point[]{
    const seen: boolean[][] = [];
    const path: Point[] = [];
    
    for (let i =0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false))
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}

console.log(solve(maze, "x", {x: 10, y: 0}, {x:1, y: 5}));