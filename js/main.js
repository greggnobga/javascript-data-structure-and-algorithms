import MathAlgorithms from './class/algorithms/math-algorithms.js';
import SearchAlgorithms from './class/algorithms/search-algorithms.js';
import SortAlgorithms from './class/algorithms/sort-algorithms.js';
import MiscellaneousProblems from './class/algorithms/miscellaneous-problems.js';
import ArrayStructure from './class/data-structures/arrays.js';
import ObjectStructure from './class/data-structures/objects.js';
import SetStructure from './class/data-structures/sets.js';
import MapStructure from './class/data-structures/maps.js';
import StackStructure from './class/data-structures/stacks.js';
import QueueStructure from './class/data-structures/queues.js';
import CircularQueueStructure from './class/data-structures/circular-queues.js';
import LinkedListStructure from './class/data-structures/linked-lists.js';
import LinkedListStack from './class/data-structures/linked-list-stacks.js';
import LinkedListQueue from './class/data-structures/linked-list-queues.js';

// /** Arrays, Object and Loops */
// const fruits = ['Banana', 'Ananas', 'Jackfruit', 'Melon'];
// const products = [
//   {
//     id: 1,
//     name: 'Bamboo Shoe Rack',
//     description: 'Small and elegant shoe rack.',
//     tags: ['bamboo', 'rack', 'shoe'],
//     inStock: true,
//   },
//   {
//     id: 2,
//     name: 'HP Mini Computer',
//     description: 'Low powered mini computer.',
//     tags: ['low powered', 'mini', 'computer'],
//     inStock: false,
//   },
//   {
//     id: 3,
//     name: 'Edifier Bluetooth Headset',
//     description: 'A crisp and realiable headset.',
//     tags: ['bluetooth', 'headset', 'computer'],
//     inStock: true,
//   },
//   {
//     id: 4,
//     name: 'LG Gaming Monitor',
//     description: 'Affordable gaming monitor.',
//     tags: ['screen', 'screen', 'computer'],
//     inStock: false,
//   },
// ];

// /** Access single item from array. */
// console.log('Access single item in array: ', fruits[0]);
// console.log('Access single item in multi array: ', products[2].tags[0]);
// console.log('Access single item in object: ', products[1].name);

// console.log('Object Keys: ', Object.keys(products[0]));
// console.log('Object Value: ', Object.values(products[2]));
// console.log('Object Entries: ', Object.entries(products[3]));

// for (let fruit of fruits) {
//   console.log('For loop: ', fruit);
// }

// /** Array functions, forEach, map, filter, reduce */
// fruits.forEach((fruit) => {
//   console.log('For each: ', fruit);
// });

// const productsMap = products
//   .map((product) => {
//     if (product.inStock === true) {
//       return product.name;
//     }
//   })
//   .filter((element) => element !== undefined);

// console.log('Array Map and Filter', productsMap);

// /** Document Object Model. */
// window.addEventListener('resize', function (event) {
//   console.log(window.innerWidth);
// });

// const textDOM = document.querySelector('.text-center');

// textDOM.addEventListener('click', () => {
//   const changeDOM = document.querySelector('.change-me');
//   changeDOM.textContent = 'Hello, Reijo.';

//   setTimeout(() => {
//     changeDOM.textContent = '';
//   }, 3000);
// });

// /** Class Math Algorightms. */
// const mathInstance = new MathAlgorithms();
// console.log('Fibonacci ', mathInstance.fibonacci(2));
// console.log('Fibonacci ', mathInstance.fibonacci(3));
// console.log('Fibonacci ', mathInstance.fibonacci(7));

// console.log('Factorial ', mathInstance.factorial(0));
// console.log('Factorial ', mathInstance.factorial(1));
// console.log('Factorial ', mathInstance.factorial(5));

// console.log('Primal ', mathInstance.isPrime(1));
// console.log('Primal ', mathInstance.isPrime(5));
// console.log('Primal ', mathInstance.isPrime(4));

// console.log('Power of two bitwise ', mathInstance.isPowerOfTwoBitwise(1));
// console.log('Power of two bitwise ', mathInstance.isPowerOfTwoBitwise(2));
// console.log('Power of two bitwise ', mathInstance.isPowerOfTwoBitwise(5));

// console.log('Recursive Fibonacci ', mathInstance.recursiveFibonacci(0));
// console.log('Recursive Fibonacci ', mathInstance.recursiveFibonacci(1));
// console.log('Recursive Fibonacci  ', mathInstance.recursiveFibonacci(6));

// console.log('Recursive Factorial ', mathInstance.recursiveFactorial(0));
// console.log('Recursive Factorial ', mathInstance.recursiveFactorial(1));
// console.log('Recursive Factorial  ', mathInstance.recursiveFactorial(5));

// /** Search Alogrithms. */
// const searchInstance = new SearchAlgorithms();
// console.log('Linear Search ', searchInstance.linearSearch([-5, 2, 3, 4, 5, 6, 10], 3));
// console.log('Linear Search ', searchInstance.linearSearch([-5, 2, 3, 4, 5, 6, 10], 5));
// console.log('Linear Search  ', searchInstance.linearSearch([-5, 2, 4, 6, 5, 6, 10], 8));

// console.log('Binary Search ', searchInstance.binarySearch([-5, 2, 4, 7, 5, 6, 10], 2));
// console.log('Binary Search ', searchInstance.binarySearch([-5, 9, 4, 7, 5, 6, 10], 10));
// console.log('Binary Search  ', searchInstance.binarySearch([-5, 2, 4, 7, 5, 6, 10], 20));

// console.log('Recursive Binary Search ', searchInstance.recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
// console.log('Recursive Binary Search ', searchInstance.recursiveBinarySearch([-5, 9, 4, 7, 5, 6, 10], 10));
// console.log('Recursive Binary Search  ', searchInstance.recursiveBinarySearch([-5, 2, 4, 7, 5, 6, 10], 20));

// /** Sort Algorithms. */
// const sortInstance = new SortAlgorithms();
// console.log('Bubble Sort ', sortInstance.bubbleSort([-5, 2, 9, 27, 5, 6, 10, -2], false));
// console.log('Insertion Sort ', sortInstance.insertionSort([-5, 5, 0, 12, 9, 14, 25, -2], true));
// console.log('Quick Sort ', sortInstance.quickSort([-3, 7, 9, 23, 21, 18, 25, 0], false));
// console.log('Merge Sort ', sortInstance.mergeSort([5, 2, 9, 1, 5, 6], false));

// /** Misc Problems. */
// const miscInstance = new MiscellaneousProblems();
// console.log('Cartesan Product ', miscInstance.cartesanProduct([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));
// console.log('Climbing Staircase ', miscInstance.climbingStaircase(1));
// console.log('Climbing Staircase ', miscInstance.climbingStaircase(3));
// console.log('Climbing Staircase ', miscInstance.climbingStaircase(5));
// console.log('Tower of Hanoi ', miscInstance.towerOfHanoi(3, 'A', 'C', 'B'));

// /** Array. */
// const arrayInstance = new ArrayStructure();
// console.log('Array Basic ', arrayInstance.arrayBasic());

/** Object. */
// const objectInstance = new ObjectStructure();
// console.log('Object Basic ', objectInstance.objectBasic());

// /** Set. */
// const setInstance = new SetStructure();
// console.log('Set Basic ', setInstance.setBasic());

// /** Map. */
// const mapInstance = new MapStructure();
// console.log('Map Basic ', mapInstance.mapBasic());

// /** Stack. */
// const stackInstance = new StackStructure();
// console.log('Stack Empty', stackInstance.isEmpty());
// console.log('Stack Push', stackInstance.push(100));
// console.log('Stack Push', stackInstance.push(200));
// console.log('Stack Push', stackInstance.push(300));
// console.log('Stack Pop', stackInstance.pop());
// console.log('Stack Print', stackInstance.print());
// console.log('Stack Peek', stackInstance.peek());
// console.log('Stack Size', stackInstance.size());
// console.log('Stack Clear', stackInstance.clear());
// console.log('Stack Empty', stackInstance.isEmpty());

// /** Queue. */
// const queueInstance = new QueueStructure();
// console.log('Queue Empty ', queueInstance.isEmpty());
// queueInstance.enqueue(10);
// queueInstance.enqueue(20);
// queueInstance.enqueue(30);
// console.log('Queue Size ', queueInstance.size());
// console.log('Queue Print ', queueInstance.print());
// queueInstance.dequeue(10);
// console.log(queueInstance.peek());
// console.log('Queue Print ', queueInstance.print());

// /** Circular Queue. */
// const circularQueueInstance = new CircularQueueStructure(5);
// console.log('Circular Queue Empty ', circularQueueInstance.isEmpty());
// console.log('Circular Queue Enqueue ', circularQueueInstance.enqueue(10));
// console.log('Circular Queue Enqueue ', circularQueueInstance.enqueue(20));
// console.log('Circular Queue Enqueue ', circularQueueInstance.enqueue(30));
// console.log('Circular Queue Enqueue ', circularQueueInstance.enqueue(40));
// console.log('Circular Queue Enqueue ', circularQueueInstance.enqueue(50));
// console.log('Circular Queue Full ', circularQueueInstance.isFull());
// console.log('Circular Queue Print ', circularQueueInstance.print());
// console.log('Circular Queue Print ', circularQueueInstance.dequeue());
// console.log('Circular Queue Full ', circularQueueInstance.isFull());
// console.log('Circular Queue Print ', circularQueueInstance.print());

// /** Link List. */
// const linkedListInstance = new LinkedListStructure();
// console.log('Link List Append', linkedListInstance.append(1));
// console.log('Link List Append', linkedListInstance.append(2));
// console.log('Link List Append', linkedListInstance.append(3));
// console.log('Link List Prepend', linkedListInstance.prepend(0));
// console.log('Link List Print ', linkedListInstance.print());
// console.log('Link List Size ', linkedListInstance.getSize());
// console.log('Link List Remove From Front ', linkedListInstance.removeFromFront());
// console.log('Link List Print ', linkedListInstance.print());
// console.log('Link List Remove From Front ', linkedListInstance.removeFromEnd());
// console.log('Link List Print ', linkedListInstance.print());

// const stackInstance = new LinkedListStack();
// console.log('Linked List Stack ', stackInstance.isEmpty());
// console.log('Linked List Push ', stackInstance.push(10));
// console.log('Linked List Push ', stackInstance.push(20));
// console.log('Linked List Push ', stackInstance.push(30));
// console.log('Linked List Push ', stackInstance.push(40));
// console.log('Linked List Stack ', stackInstance.isEmpty());
// console.log('Linked List Print ', stackInstance.print());
// console.log('Linked List Pop ', stackInstance.pop());
// console.log('Linked List Peek ', stackInstance.peek());
// console.log('Linked List Size ', stackInstance.getSize());
// console.log('Linked List Print ', stackInstance.print());

const queueInstance = new LinkedListQueue();
console.log('Linked List Queue ', stackInstance.isEmpty());
