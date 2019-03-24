const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		maxSize = 30;
	}

	push(data, priority) {
		MaxHeap.push(data, priority);
	}

	shift() {
		MaxHeap.pop();
	}

	size() {

	}

	isEmpty() {
		
	}
}

module.exports = PriorityQueue;
