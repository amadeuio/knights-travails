// import graph class constructor
import { Graph } from "./utils/graphDataStructure";

// finds all immediate knight moves from a starting move
function allMoves(initial: number): number[] {
  // Extract the x and y coordinates from the two-digit number
  const x: number = Math.floor(initial / 10);
  const y: number = initial % 10;

  const possibleMoves = [];

  // define all possible knight move offsets
  const moveOffsets = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];

  // check each possible move
  for (const [dx, dy] of moveOffsets) {
    const newX = x + dx;
    const newY = y + dy;

    // check if the new position is within the chessboard (0 to 7)
    if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
      // combine the x and y coordinates to form a two-digit number
      const newPosition = newX * 10 + newY;
      possibleMoves.push(newPosition);
    }
  }

  return possibleMoves;
}

// builds a move as a node with neigbors
function moveToNode(initial: number): void {
  // add initial move to node
  path.addNode(initial);

  // find all immediate moves from the initial move, and make those moves
  // neigbors
  allMoves(initial).forEach((final) => {
    path.addNode(final);
    path.addEdge(initial, final);
  });
}

// choose starting position
const startPosition = 33;

// create path
const path = new Graph<number>();

// create starting node
path.addNode(startPosition);

// navigate the graph, creating each node along the way
path.breadthFirstTraversal(startPosition, moveToNode);

// print the whole graph
path.printGraph();

// find the shortest path
console.log(path.shortestPath(33, 43));
