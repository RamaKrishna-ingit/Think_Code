/*
  JavaScript Data Structures - Everything You Need for Coding Interviews
*/

// 1. ARRAYS (Built-in in JS, supports various operations)
let arr = [1, 2, 3, 4, 5];
arr.push(6); // Adds 6 to the end
arr.pop(); // Removes last element
arr.unshift(0); // Adds 0 at the beginning
arr.shift(); // Removes first element
console.log(arr.includes(3)); // true (Checks if 3 exists)

// 2. LINKED LIST (Custom implementation)
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    let newNode = new ListNode(value);
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
  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }
}
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.print(); // 1 -> 2 -> 3 -> null

// 3. STACK (LIFO - Last In First Out)
class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2

// 4. QUEUE (FIFO - First In First Out)
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    return this.items.shift();
  }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // 1

// 5. BINARY TREE (Basic implementation)
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let queue = [this.root];
    while (queue.length) {
      let node = queue.shift();
      if (!node.left) {
        node.left = newNode;
        return;
      }
      if (!node.right) {
        node.right = newNode;
        return;
      }
      queue.push(node.left);
      queue.push(node.right);
    }
  }
}
const tree = new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
console.log(tree.root);

// 6. GRAPH (Adjacency List Representation)
class Graph {
  constructor() {
    this.adjList = new Map();
  }
  addVertex(vertex) {
    this.adjList.set(vertex, []);
  }
  addEdge(vertex1, vertex2) {
    this.adjList.get(vertex1).push(vertex2);
    this.adjList.get(vertex2).push(vertex1);
  }
  printGraph() {
    for (let [vertex, edges] of this.adjList) {
      console.log(vertex, "->", edges.join(", "));
    }
  }
}
const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addEdge(1, 2);
graph.printGraph();

// 7. HEAP (Min Heap Example)
class MinHeap {
  constructor() {
    this.heap = [];
  }
  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }
}
const heap = new MinHeap();
heap.insert(5);
heap.insert(2);
heap.insert(8);
console.log(heap.heap); // [2, 5, 8]

// 8. TRIE (Prefix Tree for efficient search)
class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }
  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return node.isEndOfWord;
  }
}
const trie = new Trie();
trie.insert("cat");
console.log(trie.search("cat")); // true
console.log(trie.search("dog")); // false

// CONCLUSION: This file covers all major data structures used in interviews!
