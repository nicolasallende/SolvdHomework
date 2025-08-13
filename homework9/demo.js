const { Stack, MinMaxStack, Queue, BinaryTree, isBinaryTree, Graph, shortestPathBFS, shortestPathDijkstra, LinkedList, hasCycle } = require('./Task1.js');

// --- Usage Demonstration ---

// 1. Basic Stack usage
console.log("=== Basic Stack Example ===");
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack size:", stack.size());       
console.log("Top element:", stack.peek());      

console.log("Popped element:", stack.pop());    
console.log("New top:", stack.peek());          

stack.clear();
console.log("Stack size after clear:", stack.size()); 


// 2. MinMaxStack usage (Practical Example: Tracking stock prices)
console.log("\n=== MinMaxStack Example: Stock Prices ===");
const prices = new MinMaxStack();

prices.push(100);
console.log(`Price added: 100 | Min: ${prices.getMin()} | Max: ${prices.getMax()}`);

prices.push(80);
console.log(`Price added: 80 | Min: ${prices.getMin()} | Max: ${prices.getMax()}`);

prices.push(120);
console.log(`Price added: 120 | Min: ${prices.getMin()} | Max: ${prices.getMax()}`);

prices.push(90);
console.log(`Price added: 90 | Min: ${prices.getMin()} | Max: ${prices.getMax()}`);

console.log(`Removed price: ${prices.pop()} | New Min: ${prices.getMin()} | New Max: ${prices.getMax()}`);


//3.Queue (Simulate a printer job queue)
console.log("\n=== Queue Example: printer job queue ===");
const printerQueue = new Queue();

printerQueue.enqueue({ id: 1, document: "Resume.pdf", pages: 2 });
printerQueue.enqueue({ id: 2, document: "Report.docx", pages: 5 });
printerQueue.enqueue({ id: 3, document: "Invoice.xlsx", pages: 3 });

console.log(`First job in queue:`, printerQueue.peek());

while (printerQueue.size() > 0) {
    const job = printerQueue.dequeue();
    console.log(`Printing Job #${job.id} - ${job.document} (${job.pages} pages)`);
}

console.log("All print jobs completed.");



//4. BinaryTree
console.log("\n=== BinaryTree Example:  Find if a given number exists in our dataset of product IDs===");
const tree = new BinaryTree();

[50, 30, 70, 20, 40, 60, 80].forEach(value => tree.insert(value));

console.log("Searching 60:", tree.search(60)); 
console.log("Searching 25:", tree.search(25)); 

console.log("In-order:", tree.inOrder());   
console.log("Pre-order:", tree.preOrder()); 
console.log("Post-order:", tree.postOrder());

console.log("Is valid BinaryTree?", isBinaryTree(tree.root)); 

// Example
function productExists(productId) {
  return tree.search(productId);
}

console.log("Product 70 exists?", productExists(70)); 
console.log("Product 15 exists?", productExists(15)); 

//5.Graph, Shortest BFS and Shortest Djkstra
console.log("\n=== Graph Example:   City Road Network===");

const cityGraph = new Graph(false); 


cityGraph.addEdge("A", "B", 4);
cityGraph.addEdge("A", "C", 2);
cityGraph.addEdge("B", "C", 1);
cityGraph.addEdge("B", "D", 5);
cityGraph.addEdge("C", "D", 8);
cityGraph.addEdge("C", "E", 10);
cityGraph.addEdge("D", "E", 2);
cityGraph.addEdge("D", "F", 6);
cityGraph.addEdge("E", "F", 3);


console.log("DFS from A:", cityGraph.dfs("A"));
console.log("BFS from A:", cityGraph.bfs("A"));


console.log(
  "Shortest driving route from A to F using Dijkstra consider weight:",
  shortestPathDijkstra(cityGraph, "A", "F")
);

console.log(
    "Shortest driving route from A to F using BFS(doesnt consider weight):",
    shortestPathBFS(cityGraph, "A", "F")
  );

  //6. LinkedList and cicles check

  console.log("\n=== LinkedList example===");
const list = new LinkedList();
list.insert(10);
list.insert(20);
list.insert(30);
list.insert(40);
console.log("inserted 10, 20, 30, 40"); 
console.log("Search 30:", list.search(30)); 
console.log("Search 99:", list.search(99)); 


list.delete(20);
console.log("Search 20 after deletion:", list.search(20)); 


console.log("Has cycle?", hasCycle(list.head)); 


list.head.next.next.next = list.head; 

console.log("Has cycle after linking last node to head?", hasCycle(list.head));
