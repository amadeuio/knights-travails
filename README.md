![languages](https://img.shields.io/badge/languages-ts-blue)
[![learned on](https://img.shields.io/badge/learned_on-the_odin_project-d19900)](https://www.theodinproject.com/lessons/javascript-knights-travails)
![license](https://img.shields.io/badge/license-MIT-green)

# Knight Travails

### About 📖

This repository contains a TypeScript solution to the 9th assignment of the JavaScript chapter in [The Odin Project](https://www.theodinproject.com/lessons/javascript-knights-travails). The project focuses on finding all possible trajectories a knight can take on a standard 8x8 chessboard and then determining the shortest path between any two squares using a graph data structure.

### Theoretical Idea 🐴

In chess, a knight can move to any square on the 8x8 chessboard from any other square, given enough turns. For a visual representation, check out [this animation](https://cdn.statically.io/gh/TheOdinProject/curriculum/284f0cdc998be7e4751e29e8458323ad5d320303/ruby_programming/computer_science/project_knights_travails/imgs/00.png).

### Description 📚

This repository implements a program that calculates all possible trajectories a knight can take, starting from a specified position, until all squares on the chessboard have been visited, and organizes these trajectories in a graph data structure. Then, the shortest path between any two given squares on the chessboard is found by applying an algorithm that determines the shortest path between two nodes in the graph.

### Learning 🌱

This project serves as an example of utilizing the [Graph Data Structure](https://github.com/amadeuio/graph-data-structure) previously developed to solve a real-world problem.

### Usage 🖊️

Let's build the knight's path and find the shortest path between two squares:

**1. Choose starting position to start the path**

The position is specified with a two digit number that represents `xy` cordinates, each coordinate going from 0 to 7. If the number is a single digit, it means that `x = 0`. This data formatting allows for a more efficient graph mapping and processing, as well as shorter code.

```typescript
const startPosition = 33; // the traversal will start from the center of the board
```

Note: Any starting square can be used.

**2. Create path**

```typescript
const path = new Graph<number>();
```

**3. Create starting node**

```typescript
path.addNode(startPosition);
```

**4. Build the path**

Navigate the graph, creating each node and it's neighbors along the way by calling `moveToNode` callback, effectively building the whole set of possible trajectories.

```typescript
path.breadthFirstTraversal(startPosition, moveToNode);
```

**5. Let's see how the path looks by using `printGraph()`**

```typescript
33 -> [12, 14, 21, 25, 41, 45, 52, 54]
12 -> [0, 4, 20, 24, 31, 33]
14 -> [2, 6, 22, 26, 33, 35]
21 -> [0, 2, 13, 33, 40, 42]
25 -> [4, 6, 13, 17, 33, 37, 44, 46]
41 -> [20, 22, 33, 53, 60, 62]
45 -> [24, 26, 33, 37, 53, 57, 64, 66]
52 -> [31, 33, 40, 44, 60, 64, 71, 73]
54 -> [33, 35, 42, 46, 62, 66, 73, 75]
0 -> [12, 21]
etc etc etc...
```

We won't provide the whole graph data in this README for simplicity, but as you can see, all sets of possible trajectories have been effectively mapped to the data graph, each node representing a square, and it's neighbors representing all squares the knight can immediately visit next, until all squares in the 8x8 board have been visited.

**6. Let's use `shortestPath()`**

Once the whole path is mapped in the graph, the shortest path between two squares can easily be found by calling the `shortestPath()` method we developed previously.

```typescript
console.log(path.shortestPath(33, 43)); // [ 33, 12, 24, 43 ]
```

**7. Shortest path with `knightMoves()` function as requested in the assignment**

This function simply logs the result of the `shortestPath()` method in a prettier way and formats the data to a 2-dimentional array instead of a number as specified in the assignment, by using a simple utility function called `transformNumberOrArray()`.

```typescript
knightMoves([3, 3], [4, 3])

You made it in 4 moves! Here's your path:
[ 3, 3 ]
[ 1, 2 ]
[ 2, 4 ]
[ 4, 3 ]
```
