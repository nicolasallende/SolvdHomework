const { Stack, MinMaxStack, Queue } = require('./Task1.js');

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