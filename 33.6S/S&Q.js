class Queue {
    constructor() {
      this.items = [];
    }
  
    // Add an element to the end of the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Remove and return the element at the front of the queue
    dequeue() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty. Cannot dequeue.");
      }
      return this.items.shift();
    }
  
    // Return the element at the front of the queue without removing it
    peek() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty. Nothing to peek.");
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  // Example usage:
  const queue = new Queue();
  
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  
  console.log(queue.peek()); // 10
  console.log(queue.dequeue()); // 10
  console.log(queue.dequeue()); // 20
  console.log(queue.isEmpty()); // false
  console.log(queue.dequeue()); // 30
  console.log(queue.isEmpty()); // true
  
  // This will throw an error
  try {
    queue.dequeue();
  } catch (error) {
    console.error(error.message); // Queue is empty. Cannot dequeue.
  }

  
  class Stack {
    constructor() {
      this.items = [];
    }
  
    // Add an element to the top of the stack
    push(element) {
      this.items.push(element);
    }
  
    // Remove and return the element from the top of the stack
    pop() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty. Cannot pop.");
      }
      return this.items.pop();
    }
  
    // Return the element at the top of the stack without removing it
    peek() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty. Nothing to peek.");
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  // Example usage:
  const stack = new Stack();
  
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  console.log(stack.peek()); // 30
  console.log(stack.pop());  // 30
  console.log(stack.pop());  // 20
  console.log(stack.isEmpty()); // false
  console.log(stack.pop());  // 10
  console.log(stack.isEmpty()); // true
  
  // This will throw an error
  try {
    stack.pop();
  } catch (error) {
    console.error(error.message); // Stack is empty. Cannot pop.
  }

  
  class Queue {
    constructor() {
      this._list = new LinkedList();
      this.size = 0;
    }
  
    enqueue(value) {
      this._list.addLast(value);
      this.size++;
    }
  
    dequeue() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty. Cannot dequeue.");
      }
      const value = this._list.removeFirst();
      this.size--;
      return value;
    }
  
    peek() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty. Nothing to peek.");
      }
      return this._list.peekFirst();
    }
  
    isEmpty() {
      return this.size === 0;
    }
  }

  
  class Stack {
    constructor() {
      this._list = new LinkedList();
      this.size = 0;
    }
  
    push(value) {
      this._list.addFirst(value);
      this.size++;
    }
  
    pop() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty. Cannot pop.");
      }
      const value = this._list.removeFirst();
      this.size--;
      return value;
    }
  
    peek() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty. Nothing to peek.");
      }
      return this._list.peekFirst();
    }
  
    isEmpty() {
      return this.size === 0;
    }
  }

  
  class Queue {
    constructor() {
      this._list = [];
    }
  
    enqueue(value) {
      this._list.push(value);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty. Cannot dequeue.");
      }
      return this._list.shift();
    }
  
    peek() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty. Nothing to peek.");
      }
      return this._list[0];
    }
  
    isEmpty() {
      return this._list.length === 0;
    }
  }

  
  class Stack {
    constructor() {
      this._list = [];
    }
  
    push(value) {
      this._list.push(value);
    }
  
    pop() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty. Cannot pop.");
      }
      return this._list.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty. Nothing to peek.");
      }
      return this._list[this._list.length - 1];
    }
  
    isEmpty() {
      return this._list.length === 0;
    }
  }

  

  