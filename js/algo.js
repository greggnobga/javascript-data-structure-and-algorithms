import MathAlgorithms from './class/algorithms/math-algorithms.js';
import SearchAlgorithms from './class/algorithms/search-algorithms.js';
import SortAlgorithms from './class/algorithms/sort-algorithms.js';
import MiscellaneousProblems from './class/algorithms/miscellaneous-problems.js';

/** Class Math Algorightms. */
const mathInstance = new MathAlgorithms();
console.log('Fibonacci ', mathInstance.fibonacci(2));
console.log('Fibonacci ', mathInstance.fibonacci(3));
console.log('Fibonacci ', mathInstance.fibonacci(7));

console.log('Factorial ', mathInstance.factorial(0));
console.log('Factorial ', mathInstance.factorial(1));
console.log('Factorial ', mathInstance.factorial(5));

console.log('Primal ', mathInstance.isPrime(1));
console.log('Primal ', mathInstance.isPrime(5));
console.log('Primal ', mathInstance.isPrime(4));

console.log('Power of two bitwise ', mathInstance.isPowerOfTwoBitwise(1));
console.log('Power of two bitwise ', mathInstance.isPowerOfTwoBitwise(2));
console.log('Power of two bitwise ', mathInstance.isPowerOfTwoBitwise(5));

console.log('Recursive Fibonacci ', mathInstance.recursiveFibonacci(0));
console.log('Recursive Fibonacci ', mathInstance.recursiveFibonacci(1));
console.log('Recursive Fibonacci  ', mathInstance.recursiveFibonacci(6));

console.log('Recursive Factorial ', mathInstance.recursiveFactorial(0));
console.log('Recursive Factorial ', mathInstance.recursiveFactorial(1));
console.log('Recursive Factorial  ', mathInstance.recursiveFactorial(5));

/** Search Alogrithms. */
const searchInstance = new SearchAlgorithms();
console.log('Linear Search ', searchInstance.linearSearch([-5, 2, 3, 4, 5, 6, 10], 3));
console.log('Linear Search ', searchInstance.linearSearch([-5, 2, 3, 4, 5, 6, 10], 5));
console.log('Linear Search  ', searchInstance.linearSearch([-5, 2, 4, 6, 5, 6, 10], 8));

console.log('Binary Search ', searchInstance.binarySearch([-5, 2, 4, 7, 5, 6, 10], 2));
console.log('Binary Search ', searchInstance.binarySearch([-5, 9, 4, 7, 5, 6, 10], 10));
console.log('Binary Search  ', searchInstance.binarySearch([-5, 2, 4, 7, 5, 6, 10], 20));

console.log('Recursive Binary Search ', searchInstance.recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
console.log('Recursive Binary Search ', searchInstance.recursiveBinarySearch([-5, 9, 4, 7, 5, 6, 10], 10));
console.log('Recursive Binary Search  ', searchInstance.recursiveBinarySearch([-5, 2, 4, 7, 5, 6, 10], 20));

/** Sort Algorithms. */
const sortInstance = new SortAlgorithms();
console.log('Bubble Sort ', sortInstance.bubbleSort([-5, 2, 9, 27, 5, 6, 10, -2], false));
console.log('Insertion Sort ', sortInstance.insertionSort([-5, 5, 0, 12, 9, 14, 25, -2], true));
console.log('Quick Sort ', sortInstance.quickSort([-3, 7, 9, 23, 21, 18, 25, 0], false));
console.log('Merge Sort ', sortInstance.mergeSort([5, 2, 9, 1, 5, 6], false));

/** Misc Problems. */
const miscInstance = new MiscellaneousProblems();
console.log('Cartesan Product ', miscInstance.cartesanProduct([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));
console.log('Climbing Staircase ', miscInstance.climbingStaircase(1));
console.log('Climbing Staircase ', miscInstance.climbingStaircase(3));
console.log('Climbing Staircase ', miscInstance.climbingStaircase(5));
console.log('Tower of Hanoi ', miscInstance.towerOfHanoi(3, 'A', 'C', 'B'));
