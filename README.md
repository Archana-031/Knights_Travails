# Knight’s Travails

## Overview
Knight’s Travails is a classic shortest-path problem that computes the minimum number of moves required for a knight to travel from a starting position to a target position on a chessboard.

This project demonstrates strong fundamentals in:
- Breadth-First Search (BFS)
- Graph traversal on a grid
- Queue-based search
- Path reconstruction using parent tracking

## Implementations
- **Java (Primary)**: Clean BFS-based solution with full path output
- **C (Legacy)**: Original implementation preserved for reference

## How It Works
- The chessboard is treated as an unweighted graph
- Each square represents a node
- Knight moves represent edges
- BFS guarantees the shortest path

## Sample Output
Minimum Moves Required: 6
Path:
(0, 0)
(2, 1)
(4, 2)
(6, 3)
(4, 4)
(6, 5)
(7, 7)


## Time & Space Complexity
- **Time Complexity**: O(N²)
- **Space Complexity**: O(N²)

## Project History
This problem was originally explored during my graduation period as part of DSA practice.
Due to device and environment constraints, the initial implementation was not fully preserved online.
This repository contains a clean re-implementation with improved structure, documentation, and clarity.
