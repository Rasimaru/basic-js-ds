const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

	constructor() {
		this.treeRoot = null;
	}

	root() {
		//remove line with error and write your code here
		return this.treeRoot;
	}

	add(data) {
		// remove line with error and write your code here
		this.treeRoot = addNode(this.treeRoot, data);
		function addNode(node, data) {
			if (!node) {
				return new Node(data);
			} else if (data > node.data) {
				node.right = addNode(node.right, data);
			} else {
				node.left = addNode(node.left, data);
			}
			return node;
		}
	}

	has(data) {
		// remove line with error and write your code here
		function searchNode(node, data) {
			if (!node) {
				return false;
			}

			if (node.data === data) {
				return true;
			}

			if (data > node.data) {
				return searchNode(node.right, data);
			} else {
				return searchNode(node.left, data);
			}
		}

		return searchNode(this.treeRoot, data);
	}

	find(/* data */) {
		throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	}

	remove(/* data */) {
		throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	}

	min() {
		throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	}

	max() {
		throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	}
}

module.exports = {
	BinarySearchTree
};