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
      this.edges = new Map(); 
    }
  }
  
class Graph {
  constructor(isDirected = false) {
      this.nodes = new Map();
      this.isDirected = isDirected;
  }

  addVertex(vertexName) {
      if (!this.nodes.has(vertexName)) {
        this.nodes.set(vertexName, new Node(vertexName));
      }
  }
      
  addEdge(fromVertex1, toVertex2, weight = 1) {
    //create the vertex if they dont exist maybe do them throw error later
    if (!this.nodes.has(fromVertex1)) this.addVertex(fromVertex1);
    if (!this.nodes.has(toVertex2)) this.addVertex(toVertex2);

    const fromNode1 = this.nodes.get(fromVertex1);
    const toNode2 = this.nodes.get(toVertex2);
    fromNode1.edges.set(toNode2, weight);

    if (!this.isDirected) {
      toNode2.edges.set(fromNode1, weight);
    };
  };



  dfs(initNode) {
      const startNode = this.nodes.get(initNode);
      const visited = new Set();
      const result = [];
    
      const dfsRecursive = (node) => {
        if (!node || visited.has(node)) return;
    
        visited.add(node);
        result.push(node.value);
    
        for (let neighbor of node.edges.keys()) {
          dfsRecursive(neighbor);
        }
      };
    
      dfsRecursive(startNode);
      return result;
  };

  bfs(initNode) {
    const result = [];
    if (!initNode) return result;

      const startNode = this.nodes.get(initNode);
      const visited = new Set();
        
      const queue = [startNode];
      visited.add(startNode);
    
      while (queue.length > 0) {
        const current = queue.shift();
        result.push(current.value);
    
        for (let neighbor of current.edges.keys()) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          };
        };
      };
    return result;
  };
};
  
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

  return (isBinaryTree(node.left, min, node.value) && isBinaryTree(node.right, node.value, max));
};


//Auxiliar function to help with shortest BFS and Dijkstra
function reconstructPath(graph, prev, startValue, endValue) {
  const path = [];
  let current = graph.nodes.get(endValue);
  if (!current) return null;

  while (current) {
    path.unshift(current.value);
    current = prev.get(current);
  }

  return path[0] === startValue ? path : null;
}


function shortestPathBFS(graph, startValue, endValue) {
  if (!graph.nodes.has(startValue) || !graph.nodes.has(endValue)) return null;

  const queue = [graph.nodes.get(startValue)];
  const visited = new Set([graph.nodes.get(startValue)]);
  const prev = new Map();

  while (queue.length > 0) {
    const current = queue.shift();
    if (current.value === endValue) break;

    for (let neighbor of current.edges.keys()) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        prev.set(neighbor, current);
        queue.push(neighbor);
      }
    }
  }

  return reconstructPath(graph, prev, startValue, endValue);
}


function shortestPathDijkstra(graph, startValue, endValue) {
  if (!graph.nodes.has(startValue) || !graph.nodes.has(endValue)) return null;

  const distances = new Map();
  const prev = new Map();
  const pq = new Set(graph.nodes.values());

  for (let node of pq) {
    distances.set(node, Infinity);
  }
  distances.set(graph.nodes.get(startValue), 0);

  while (pq.size > 0) {
    let current = null;
    for (let node of pq) {
      if (current === null || distances.get(node) < distances.get(current)) {
        current = node;
      }
    }

    pq.delete(current);

    if (current.value === endValue) break;

    for (let [neighbor, weight] of current.edges) {
      let alt = distances.get(current) + weight;
      if (alt < distances.get(neighbor)) {
        distances.set(neighbor, alt);
        prev.set(neighbor, current);
      }
    }
  }

  return reconstructPath(graph, prev, startValue, endValue);
}


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

//i will keep adding when i advance
module.exports = { Stack, MinMaxStack, Queue, BinaryTree, isBinaryTree, Graph, shortestPathBFS, shortestPathDijkstra, LinkedList, hasCycle };