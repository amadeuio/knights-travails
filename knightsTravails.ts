// import graph class constructor
import { Graph } from "./utils/graphDataStructure";

// finds all immediate knight moves from a starting move
function allMoves(initial: number): number[] {
  // extract the x and y coordinates from the two-digit number
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

// utility function: transforms number to array and vice versa
function transformNumberOrArray(input: number[] | number): number | number[] {
  if (typeof input === "number") {
    const tens = Math.floor(input / 10);
    const ones = input % 10;
    return [tens, ones];
  } else if (Array.isArray(input)) {
    const tens = input[0];
    const ones = input[1];
    return tens * 10 + ones;
  }

  return input;
}

// takes initial & final position in array format, and prints shortest path between them
function knightMoves(initial: number[], final: number[]): void {
  const initialNumber = transformNumberOrArray(initial) as number;
  const finalNumber = transformNumberOrArray(final) as number;

  const shortestPathArr = path.shortestPath(initialNumber, finalNumber);

  console.log(
    `You made it in ${shortestPathArr?.length} moves! Here's your path:`
  );

  shortestPathArr?.forEach((step) => {
    const stepArray = transformNumberOrArray(step);
    console.log(stepArray);
  });
}

// usage

// choose starting position
const startPosition = 33;

// create path
const path = new Graph<number>();

// create starting node
path.addNode(startPosition);

// navigate the graph, creating each node along the way by calling moveToNode,
// effectively building the whole set of possible trajectories
path.breadthFirstTraversal(startPosition, moveToNode);

// print the graph
path.printGraph();

// find the shortest path
console.log(path.shortestPath(33, 43));

// find shortest path with knightMoves() function as requested in the TOP assignment
knightMoves([3, 3], [4, 3]);
