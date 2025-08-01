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
  
  class BinaryTree {
    // Implement methods for inserting nodes, searching, traversing...
  }
  
  class Graph {
    // Implement methods for adding vertices, edges, DFS, BFS...
  }
  
  class LinkedList {
    // Implement methods for inserting, deleting, searching...
  }