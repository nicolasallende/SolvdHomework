Data Structures & Algorithms Documentation
Overview

This repository implements fundamental data structures and search/graph algorithms in JavaScript, along with example use cases in demo.js.
It’s designed as a reference for learning, testing, and practical application of core computer science concepts.


1. Stack
Purpose

A LIFO (Last-In-First-Out) data structure where the last inserted element is the first to be removed.
Commonly used in:

    Undo/Redo functionality
    Expression evaluation
    Depth-first search

Methods
Method	| Description	| Time Complexity
push(element) |	Adds an element to the top. |	O(1)
pop()	| Removes and returns the top element. |	O(1)
peek() |	Returns the top element without removing it. |	O(1)
size() |	Returns number of elements. |	O(1)
clear() |	Empties the stack. |	O(1)


2. MinMaxStack
Purpose

Extension of Stack that can return the minimum and maximum element in constant time.
Useful for:

    Stock price tracking
    Range queries

Additional Methods
Method |	Description	| Time Complexity
getMin() |	Returns the current minimum. |	O(1)
getMax() |	Returns the current maximum. |	O(1)

Implementation note:
Uses two auxiliary stacks (#minStack, #maxStack) to track min and max values at each insertion.


3. Queue
Purpose

A FIFO (First-In-First-Out) structure.
Commonly used for:

    Task scheduling
    Printer job management
    Breadth-first search

Methods
Method |	Description	| Time Complexity
enqueue(element) |	Adds to the back. |	O(1)
dequeue() |	Removes from the front. |	O(n) (due to array shift)
peek()	| Returns first element without removing. |	O(1)
size() |	Number of elements. |	O(1)
clear() |	Empties queue. |	O(1)


4. BinaryTree
Purpose

A tree where each node has at most two children.
Used for:

    Hierarchical data storage
    Efficient searching in Binary Search Tree (BST) form

Methods
Method |	Description	| Time Complexity (avg)
insert(value) |	Inserts while maintaining BST property.	| O(log n)
search(value) |	Checks if value exists. |	O(log n)
inOrder() |	Left → Node → Right traversal. |	O(n)
preOrder() |	Node → Left → Right traversal. |	O(n)
postOrder()	| Left → Right → Node traversal. |	O(n)


5. Graph
Purpose

A collection of vertices (nodes) connected by edges.
Supports both directed and undirected graphs.


Methods
Method |	Description |	Time Complexity
addVertex(name) |	Adds a new node. |	O(1)
addEdge(from, to, weight=1) |	Connects vertices with optional weight. |	O(1)
dfs(start) |	Depth-first traversal. |	O(V+E)
bfs(start) |	Breadth-first traversal. |	O(V+E)


6. LinkedList
Purpose

A sequence of nodes where each node points to the next.
Efficient for insertions/deletions in the middle of the list.


Methods
Method |	Description |	Time Complexity
insert(value) |	Adds to end. |	O(n)
delete(value) |	Removes first occurrence. |	O(n)
search(value) |	Checks existence. |	O(n)


7. Algorithms
isBinaryTree(node)

    Purpose: Checks if a tree satisfies BST rules.

    Time Complexity: O(n)

shortestPathBFS(graph, start, end)

    Purpose: Finds shortest path without weights.

    Time Complexity: O(V+E)

shortestPathDijkstra(graph, start, end)

    Purpose: Finds shortest path with weights.

    Time Complexity: O(V²) (Set-based implementation)

hasCycle(head)

    Purpose: Detects if a linked list contains a cycle using Floyd’s Tortoise and Hare.

    Time Complexity: O(n)

    Space Complexity: O(1)

8. Example Usage

See demo.js for:

    Stack (basic operations)

    MinMaxStack (stock prices)

    Queue (printer job simulation)

    BinaryTree (product search)

    Graph (road network shortest path)

    LinkedList (cycle detection)