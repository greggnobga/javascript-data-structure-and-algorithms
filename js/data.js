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
import HashTable from './class/data-structures/hash-tables.js';
import BinarySearchTree from './class/data-structures/binary-search-trees.js';
import Graph from './class/data-structures/graphs.js';

/** Array. */
const arrayInstance = new ArrayStructure();
console.log('Array Basic ', arrayInstance.arrayBasic());

/** Object. */
const objectInstance = new ObjectStructure();
console.log('Object Basic ', objectInstance.objectBasic());

/** Set. */
const setInstance = new SetStructure();
console.log('Set Basic ', setInstance.setBasic());

/** Map. */
const mapInstance = new MapStructure();
console.log('Map Basic ', mapInstance.mapBasic());

/** Stack. */
const stackInstance = new StackStructure();
console.log('Stack Empty', stackInstance.isEmpty());
console.log('Stack Push', stackInstance.push(100));
console.log('Stack Push', stackInstance.push(200));
console.log('Stack Push', stackInstance.push(300));
console.log('Stack Pop', stackInstance.pop());
console.log('Stack Print', stackInstance.print());
console.log('Stack Peek', stackInstance.peek());
console.log('Stack Size', stackInstance.size());
console.log('Stack Clear', stackInstance.clear());
console.log('Stack Empty', stackInstance.isEmpty());

/** Queue. */
const queueInstance = new QueueStructure();
console.log('Queue Empty ', queueInstance.isEmpty());
queueInstance.enqueue(10);
queueInstance.enqueue(20);
queueInstance.enqueue(30);
console.log('Queue Size ', queueInstance.size());
console.log('Queue Print ', queueInstance.print());
queueInstance.dequeue(10);
console.log(queueInstance.peek());
console.log('Queue Print ', queueInstance.print());

/** Circular Queue. */
const circularQueueInstance = new CircularQueueStructure(5);
console.log('Circular Queue Empty ', circularQueueInstance.isEmpty());
console.log('Circular Queue Enqueue ', circularQueueInstance.enqueue(10));
console.log('Circular Queue Enqueue ', circularQueueInstance.enqueue(20));
console.log('Circular Queue Enqueue ', circularQueueInstance.enqueue(30));
console.log('Circular Queue Enqueue ', circularQueueInstance.enqueue(40));
console.log('Circular Queue Enqueue ', circularQueueInstance.enqueue(50));
console.log('Circular Queue Full ', circularQueueInstance.isFull());
console.log('Circular Queue Print ', circularQueueInstance.print());
console.log('Circular Queue Print ', circularQueueInstance.dequeue());
console.log('Circular Queue Full ', circularQueueInstance.isFull());
console.log('Circular Queue Print ', circularQueueInstance.print());

/** Link List. */
const linkedListInstance = new LinkedListStructure();
console.log('Link List Append', linkedListInstance.append(1));
console.log('Link List Append', linkedListInstance.append(2));
console.log('Link List Append', linkedListInstance.append(3));
console.log('Link List Prepend', linkedListInstance.prepend(0));
console.log('Link List Print ', linkedListInstance.print());
console.log('Link List Size ', linkedListInstance.getSize());
console.log('Link List Remove From Front ', linkedListInstance.removeFromFront());
console.log('Link List Print ', linkedListInstance.print());
console.log('Link List Remove From Front ', linkedListInstance.removeFromEnd());
console.log('Link List Print ', linkedListInstance.print());

const linkedStackInstance = new LinkedListStack();
console.log('Linked List Stack ', linkedStackInstance.isEmpty());
console.log('Linked List Push ', linkedStackInstance.push(10));
console.log('Linked List Push ', linkedStackInstance.push(20));
console.log('Linked List Push ', linkedStackInstance.push(30));
console.log('Linked List Push ', linkedStackInstance.push(40));
console.log('Linked List Stack ', linkedStackInstance.isEmpty());
console.log('Linked List Print ', linkedStackInstance.print());
console.log('Linked List Pop ', linkedStackInstance.pop());
console.log('Linked List Peek ', linkedStackInstance.peek());
console.log('Linked List Size ', linkedStackInstance.getSize());
console.log('Linked List Print ', linkedStackInstance.print());

const linkedQueueInstance = new LinkedListQueue();
console.log('Linked List Queue ', linkedQueueInstance.isEmpty());
console.log('Linked List Print ', linkedQueueInstance.enqueue(10));
console.log('Linked List Print ', linkedQueueInstance.enqueue(20));
console.log('Linked List Print ', linkedQueueInstance.enqueue(30));
console.log('Linked List Size ', linkedQueueInstance.getSize());
console.log('Linked List Print ', linkedQueueInstance.print());
console.log('Linked List Print ', linkedQueueInstance.enqueue(40));
console.log('Linked List Dequeue ', linkedQueueInstance.dequeue());
console.log('Linked List Size ', linkedQueueInstance.getSize());
console.log('Linked List Print ', linkedQueueInstance.print());
console.log('Linked List Peek ', linkedQueueInstance.peek());

const hashTableInstance = new HashTable(50);
console.log('Hash Table Set ', hashTableInstance.set('age', 25));
console.log('Hash Table Set ', hashTableInstance.set('name', 'John'));
console.log('Hash Table Set ', hashTableInstance.set('surname', 'Doe'));
console.log('Hash Table Set ', hashTableInstance.set('mane', 'Horse'));
console.log('Hash Table Display ', hashTableInstance.display());
console.log('Hash Table Get ', hashTableInstance.get('mane'));
console.log('Hash Table Remove ', hashTableInstance.remove('surname'));
console.log('Hash Table Display ', hashTableInstance.display());

const binarySearchInstance = new BinarySearchTree();
console.log('Binary Search Empty ', binarySearchInstance.isEmpty());
console.log('Binary Search Insert ', binarySearchInstance.insert(10));
console.log('Binary Search Insert ', binarySearchInstance.insert(5));
console.log('Binary Search Insert ', binarySearchInstance.insert(15));
console.log('Binary Search Insert ', binarySearchInstance.insert(3));
console.log('Binary Search Empty ', binarySearchInstance.isEmpty());
console.log('Binary Search Search ', binarySearchInstance.search(binarySearchInstance.root, 7));
console.log('Binary Search Pre Order ', binarySearchInstance.preOrder(binarySearchInstance.root));
console.log('Binary Search In Order ', binarySearchInstance.inOrder(binarySearchInstance.root));
console.log('Binary Search Post Order ', binarySearchInstance.postOrder(binarySearchInstance.root));
console.log('Binary Search Level Order ', binarySearchInstance.levelOrder());
console.log('Binary Search Min ', binarySearchInstance.min(binarySearchInstance.root));
console.log('Binary Search Max ', binarySearchInstance.max(binarySearchInstance.root));
console.log('Binary Search Level Order ', binarySearchInstance.levelOrder());
console.log('Binary Search Level Delete ', binarySearchInstance.delete(3));
console.log('Binary Search Level Order ', binarySearchInstance.levelOrder());

const graphInstance = new Graph();
console.log('Graph Add Vertex', graphInstance.addVertex('A'));
console.log('Graph Add Vertex', graphInstance.addVertex('B'));
console.log('Graph Add Vertex', graphInstance.addVertex('C'));
console.log('Graph Add Edge', graphInstance.addEdge('A', 'B'));
console.log('Graph Add Edge', graphInstance.addEdge('A', 'C'));
console.log('Graph Add Edge', graphInstance.addVertex('B', 'C'));
console.log('Graph Display ', graphInstance.display());
console.log('Graph Remove Edge ', graphInstance.display('A', 'B'));
console.log('Graph Display ', graphInstance.display());
console.log('Graph Remove Vertex ', graphInstance.removeVertex('A'));
console.log('Graph Display ', graphInstance.display());
