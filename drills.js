'use strict';
const LinkedList = require('./LinkedList');

// Understanding Merge Sort
// Third Call: [21, 1]
// 16th Call: [1, 21]
// First 2: [21] & [1]
// 7th Merge: [43] & [34]

// Understanding Quicksort
// 1) The pivot could have been eithe 14 or 17 because each number to the left of
// those is less than 14 or 17 and each number to the right is greater.
// 2) Last Item:  [10, 3]
//    First Item: [13, 10]

// Implementing Quicksort
function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

function qSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = qSort(array, start, middle);
  array = qSort(array, middle + 1, end);
  return array;
}

const data = [
  89,
  30,
  25,
  32,
  72,
  70,
  51,
  42,
  25,
  24,
  53,
  55,
  78,
  50,
  13,
  40,
  48,
  32,
  26,
  2,
  14,
  33,
  45,
  72,
  56,
  44,
  21,
  88,
  27,
  68,
  15,
  62,
  93,
  98,
  73,
  28,
  16,
  46,
  87,
  28,
  65,
  38,
  67,
  16,
  85,
  63,
  23,
  69,
  64,
  91,
  9,
  70,
  81,
  27,
  97,
  82,
  6,
  88,
  3,
  7,
  46,
  13,
  11,
  64,
  76,
  31,
  26,
  38,
  28,
  13,
  17,
  69,
  90,
  1,
  6,
  7,
  64,
  43,
  9,
  73,
  80,
  98,
  46,
  27,
  22,
  87,
  49,
  83,
  6,
  39,
  42,
  51,
  54,
  84,
  34,
  53,
  78,
  40,
  14,
  5
];

// Implementing Merge Sort
function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }
  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }
  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}

function mSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);
  left = mSort(left);
  right = mSort(right);
  return merge(left, right, array);
}

// Sorting a Linked List Using Merge Sort
const list = new LinkedList();
list.insertFirst(23);
list.insertLast(42);
list.insertLast(26);
list.insertLast(58);
list.insertLast(46);
list.insertLast(29);
list.insertLast(16);
list.insertLast(8);

// console.log(mSort(list.display())); /* Wrote display() helper in LinkedList.js */

// Bucket Sort
function bucketSort(arr, low, high) {
  const result = [];
  for (let i = 0; i < high; i++) {
    result[i] = '';
  }
  for (let i = 0; i < arr.length; i++) {
    result[arr[i] - low] = arr[i];
  }
  return result;
}

let bucketData = [1, 4, 2, 3, 5];
// console.log(bucketSort(bucketData, 1, 5));

// Sort in Place
function sortInPlace(arr, counter = 0) {
  while (counter < arr.length) {
    swap(arr, Math.floor(Math.random() * arr.length), counter);
    counter++;
    sortInPlace(arr, counter);
  }
  return arr;
}

// console.log(sortInPlace(bucketData));

// Sorting Books

let books = ['a', 'd', 'k', 'c', 't', 'm'];

function sortBooks(arr, start = 0, end = arr.length) {
  if (start >= end) {
    return arr;
  }
  const middle = partition(arr, start, end);
  sortBooks(arr, start, middle);
  sortBooks(arr, middle + 1, end);
  return arr;
}

console.log(sortBooks(books));
