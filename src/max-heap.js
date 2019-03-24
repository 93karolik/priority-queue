const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		var newNode = new Node(data, priority);
		insertNode(newNode);
		shiftNodeUp(newNode);
	}

	pop() {
		detachRoot();
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		
	}

	insertNode(node) {
		//if (){
			//node = this.root;
		//}		
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
