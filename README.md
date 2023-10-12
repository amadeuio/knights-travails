![languages](https://img.shields.io/badge/languages-ts-blue)
[![learned on](https://img.shields.io/badge/learned_on-the_odin_project-d19900)](https://www.theodinproject.com/lessons/javascript-knights-travails)
![license](https://img.shields.io/badge/license-MIT-green)

# Knight Travails

### About 📖

This repository contains a JavaScript solution to the 9th assignment in [The Odin Project](https://www.theodinproject.com/lessons/javascript-knights-travails). The project focuses on finding all possible trajectories a knight can take on a standard 8x8 chessboard and then determining the shortest path between any two squares using a graph data structure.

### Theoretical Idea 🐴

In chess, a knight can move to any square on the 8x8 chessboard from any other square, given enough turns. For a visual representation, check out [this animation](https://cdn.statically.io/gh/TheOdinProject/curriculum/284f0cdc998be7e4751e29e8458323ad5d320303/ruby_programming/computer_science/project_knights_travails/imgs/00.png).

### Description 📚

This repository implements a program that calculates all possible trajectories a knight can take, starting from a specified position, until all squares on the chessboard have been visited, and organizes these trajectories in a graph data structure. Then, the shortest path between any two given squares on the chessboard can be found by applying an algorithm that determines the shortest path between two nodes in the graph.

### Learning 🌱

This project serves as an example of utilizing the [Graph Data Structure](https://github.com/nightrunner4/graph-data-structure) previously developed to solve a real-world problem.

### Usage

To find the shortest path between two squares on the chessboard, you can use the following code snippet:

```javascript
console.log(path.shortestPath(33, 43)); // Output: [33, 12, 24, 43]
```
