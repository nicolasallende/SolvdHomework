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
}
  
  class Graph {
    // Implement methods for adding vertices, edges, DFS, BFS...
  }
  
  class LinkedList {
    // Implement methods for inserting, deleting, searching...
  }