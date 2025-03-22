/*
  JavaScript Algorithms - Everything You Need for Coding Interviews
  
  This file contains essential algorithms with step-by-step explanations.
*/

/*
  1. BUBBLE SORT
  - Compares adjacent elements and swaps if needed.
  - Repeats until the list is sorted.
  - Time Complexity: O(n^2) (inefficient for large lists)
*/
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) { // Outer loop runs n-1 times
    for (let j = 0; j < n - i - 1; j++) { // Inner loop for swapping
      if (arr[j] > arr[j + 1]) { // Compare adjacent elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap if needed
      }
    }
  }
  return arr;
}
console.log(bubbleSort([5, 2, 9, 1, 5, 6]));

/*
  2. SELECTION SORT
  - Finds the smallest element and swaps it to the front.
  - Repeats the process for remaining elements.
  - Time Complexity: O(n^2)
*/
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) { // Outer loop selects position
    let minIdx = i; // Assume current index is smallest
    for (let j = i + 1; j < n; j++) { // Find the minimum
      if (arr[j] < arr[minIdx]) {
        minIdx = j; // Update minimum index
      }
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]; // Swap minimum with first unsorted
  }
  return arr;
}
console.log(selectionSort([64, 25, 12, 22, 11]));

/*
  3. MERGE SORT
  - Recursively divides array into two halves until single elements remain.
  - Merges sorted halves back together.
  - Time Complexity: O(n log n)
*/
function mergeSort(arr) {
  if (arr.length <= 1) return arr; // Base case: single element is sorted
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid)); // Recursively sort left half
  let right = mergeSort(arr.slice(mid)); // Recursively sort right half
  return merge(left, right); // Merge sorted halves
}
function merge(left, right) {
  let sorted = [];
  while (left.length && right.length) { // While both halves have elements
    if (left[0] < right[0]) sorted.push(left.shift()); // Push smaller element
    else sorted.push(right.shift());
  }
  return [...sorted, ...left, ...right]; // Merge remaining elements
}
console.log(mergeSort([5, 3, 8, 6, 2, 7]));

/*
  4. QUICK SORT
  - Picks a pivot element and partitions the array into smaller and greater elements.
  - Recursively applies quicksort to partitions.
  - Time Complexity: O(n log n) (average case)
*/
function quickSort(arr) {
  if (arr.length <= 1) return arr; // Base case: single element is sorted
  let pivot = arr[arr.length - 1]; // Choose pivot (last element)
  let left = arr.filter((el) => el < pivot); // Elements less than pivot
  let right = arr.filter((el) => el > pivot); // Elements greater than pivot
  return [...quickSort(left), pivot, ...quickSort(right)]; // Recursive call
}
console.log(quickSort([3, 6, 8, 10, 1, 2, 1]));

/*
  5. BINARY SEARCH
  - Requires sorted array.
  - Uses divide and conquer to find element in O(log n) time.
*/
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // Find middle index
    if (arr[mid] === target) return mid; // Found target
    else if (arr[mid] < target) left = mid + 1; // Search right half
    else right = mid - 1; // Search left half
  }
  return -1; // Element not found
}
console.log(binarySearch([1, 2, 3, 4, 5, 6], 4));

/*
  6. BFS (Breadth-First Search for Graphs)
  - Visits all neighbors before deeper nodes.
  - Uses a queue (FIFO) to explore nodes.
*/
function bfs(graph, start) {
  let queue = [start],
    visited = new Set();
  while (queue.length) {
    let node = queue.shift(); // Remove from front of queue
    if (!visited.has(node)) {
      console.log(node); // Visit node
      visited.add(node);
      queue.push(...graph[node]); // Add neighbors to queue
    }
  }
}
const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F", "G"],
  D: [],
  E: [],
  F: [],
  G: [],
};
bfs(graph, "A");

/*
  7. DFS (Depth-First Search for Graphs)
  - Visits deep paths before neighbors.
  - Uses recursion (or a stack) to explore paths.
*/
function dfs(graph, node, visited = new Set()) {
  if (visited.has(node)) return; // Stop if node is already visited
  console.log(node); // Visit node
  visited.add(node);
  graph[node].forEach((neighbor) => dfs(graph, neighbor, visited)); // Recur on neighbors
}
dfs(graph, "A");

/*
  CONCLUSION: This file contains essential algorithms for coding interviews!
  - Sorting: Bubble Sort, Selection Sort, Merge Sort, Quick Sort
  - Searching: Binary Search
  - Graph Traversal: BFS, DFS
  - Each algorithm is explained step by step!
*/
