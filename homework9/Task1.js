class Stack {
    #items = [];

    push(element){
        this.#items.push(element);
    }

    pop(){
        if(this.#items.length === 0){
            throw new Error("Stack is empty"); 
        }
        return this.#items.pop();
    }

    peek(){
        if(this.#items.length === 0){
            throw new Error("Stack is empty"); 
        }
        return this.#items[this.#items.length - 1];
    }

    size(){
        return this.#items.length;
    }

    clear(){
        this.#items = [];
    }
}
  
class Queue {
    #items = [];

    enqueue(element){
        this.#items.push(element);
    }

    dequeue(){
        if(this.#items.length === 0){
            throw new Error("Stack is empty"); 
        }

        return this.#items.shift();
    }

    peek(){
        if(this.#items.length === 0){
            throw new Error("Stack is empty"); 
        }

        return this.#items[0];
    }

    size(){
        return this.#items.length;
    }

    clear(){
        this.#items = [];
    }
}

//Class used for the nodes of the binary tree

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}


class BinaryTree {
    constructor(){
        this.root = null
    }

    insert(value) {
        const newNode = new TreeNode(value);
    
        if (!this.root) {
          this.root = newNode;
          return;
        }
    
        let current = this.root;
    
        while (true) {
          if (value < current.value) {
            if (!current.left) {
              current.left = newNode;
              return;
            }
            current = current.left;
          } else {
            //if equal value we send it to the node on the right
            if (!current.right) {
              current.right = newNode;
              return;
            }
            current = current.right;
          }
        }
    }


    search(value) {
        let current = this.root;
    
        while (current) {
          if (value === current.value) return true;
          current = value < current.value ? current.left : current.right;
        }
    
        return false;
    }

    inOrder(node = this.root, result = []) {
        if (node) {
          this.inOrder(node.left, result);
          result.push(node.value);
          this.inOrder(node.right, result);
        }
        return result;
    }
    
    preOrder(node = this.root, result = []) {
        if (node) {
          result.push(node.value);
          this.preOrder(node.left, result);
          this.preOrder(node.right, result);
        }
        return result;
    }
    
    postOrder(node = this.root, result = []) {
        if (node) {
          this.postOrder(node.left, result);
          this.postOrder(node.right, result);
          result.push(node.value);
        }
        return result;
    }
}

//Class used for the nodes of the graph
class Node {
    constructor(vertexName) {
      this.value = vertexName;
      this.neighbors = new Set(); 
    }
  }
  
class Graph {
    constructor() {
        this.nodes = new Map(); 
    }

    addVertex(vertexName) {
        if (!this.nodes.has(vertexName)) {
          this.nodes.set(vertexName, new Node(vertexName));
        }
    }
      
    addEdge(vertexName1, vertexName2, weight = 1) {
      this.addVertex(vertexName1);
      this.addVertex(vertexName2);

      const node1 = this.nodes.get(vertexName1);
      const node2 = this.nodes.get(vertexName2);


      node1.neighbors.add({ node: node2, weight });
      node2.neighbors.add({ node: node1, weight }); 
  }



    dfs(initNode) {
        const startNode = this.nodes.get(initNode);
        const visited = new Set();
        const result = [];
    
        const dfsRecursive = (node) => {
          if (!node || visited.has(node)) return;
    
          visited.add(node);
          result.push(node.value);
    
          for (const neighbor of node.neighbors) {
            dfsRecursive(neighbor);
          }
        };
    
        dfsRecursive(startNode);
        return result;
    }

    bfs(initNode) {
        const startNode = this.nodes.get(initNode);
        const visited = new Set();
        const result = [];
        const queue = [startNode];
    
        visited.add(startNode);
    
        while (queue.length > 0) {
          const current = queue.shift();
          result.push(current.value);
    
          for (const neighbor of current.neighbors) {
            if (!visited.has(neighbor)) {
              visited.add(neighbor);
              queue.push(neighbor);
            };
          };
        };
    
        return result;
    };
  }
  
//Class used for the nodes of the linked list
class LinkedListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }


    insert(value) {
        const newNode = new LinkedListNode(value);
    
        if (!this.head) {
          this.head = newNode;
          return;
        }
    
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
    }


    delete(value) {
        if (!this.head) return;
    
        if (this.head.value === value) {
          this.head = this.head.next;
          return;
        }
    
        let current = this.head;
        while (current.next && current.next.value !== value) {
          current = current.next;
        };
    
        if (current.next && current.next.value === value) {
          current.next = current.next.next;
        };
    }

    search(value) {
        let current = this.head;
        while (current) {
          if (current.value === value) return true;
          current = current.next;
        }
        return false;
    }
}


//--------------------------------------------PART 2---------------------

class MinMaxStack extends Stack {
  #minStack = [];
  #maxStack = [];

  push(element) {
      super.push(element); 


      if (this.#minStack.length === 0 || element < this.getMin()) {
          this.#minStack.push(element);
      } else {
          this.#minStack.push(this.getMin());
      };


      if (this.#maxStack.length === 0 || element > this.getMax()) {
          this.#maxStack.push(element);
      } else {
          this.#maxStack.push(this.getMax());
      };
  };

  pop() {
      if (this.size() === 0) {
          throw new Error("Stack is empty");
      }
      this.#minStack.pop();
      this.#maxStack.pop();
      return super.pop();
  };

  getMin() {
      if (this.#minStack.length === 0) {
          throw new Error("Stack is empty");
      }
      return this.#minStack[this.#minStack.length - 1];
  };

  getMax() {
      if (this.#maxStack.length === 0) {
          throw new Error("Stack is empty");
      }
      return this.#maxStack[this.#maxStack.length - 1];
  };

  clear() {
      super.clear();
      this.#minStack = [];
      this.#maxStack = [];
  };
}


function isBinaryTree(node, min = -Infinity, max = Infinity) {
  if (!node) return true;

  if (node.value <= min || node.value > max) return false;

  return (isBST(node.left, min, node.value) && isBST(node.right, node.value, max));
};

//I need to redo the graph to also consider weighted edges
//bfs and dijkstra

// Floyd's Cycle Detection Algorithm (Tortoise and Hare algorithm)
function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
      slow = slow.next;         
      fast = fast.next.next;    

      if (slow === fast) {
          return true; 
      };
  };
  return false;
};