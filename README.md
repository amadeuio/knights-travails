![languages](https://img.shields.io/badge/languages-ts-blue)
[![learned on](https://img.shields.io/badge/learned_on-the_odin_project-d19900)](https://www.theodinproject.com/lessons/javascript-knights-travails)
![license](https://img.shields.io/badge/license-MIT-green)

# Knight Travails

### About 📖

Solution to the 9th assignment in the JavaScript chapter in [The Odin Project](https://www.theodinproject.com/lessons/javascript-knights-travails).

### Theorical Idea 🐴

A knight in chess can move to any square on the standard 8x8 chess board from any other square on the board, given enough turns. Check [this animation](https://cdn.statically.io/gh/TheOdinProject/curriculum/284f0cdc998be7e4751e29e8458323ad5d320303/ruby_programming/computer_science/project_knights_travails/imgs/00.png) for an example.

### Description 📚

This repo implements a program that finds all the possible trajectories a knight can take starting from a given position until all squares have been visited, and organizes them in a data graph.
This is done to then find the shortes path between two given squares, by applying an algorithm that finds the shortes path between two nodes in the graph.

### Learning 🌱

This is an example of using the [Graph Data Structure](https://github.com/nightrunner4/graph-data-structure) we previously built to solve a real world problem.

### Usage

// find the shortest path
`console.log(path.shortestPath(33, 43))` // 33, 12, 24, 43
