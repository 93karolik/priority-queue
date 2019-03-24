class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		node.child = this.left;
	}

	removeChild(node) {

	}

	remove() {

	}

	swapWithParent() {
		
	}
}

module.exports = Node;
