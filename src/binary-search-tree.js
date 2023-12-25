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

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.treeRoot) return false;

    let node = this.treeRoot;
    let result = false;

    while (node && !result) {
      if (data < node.data) {
        node = node.left;
      } else if (data > node.data) {
        node = node.right;
      } else {
        result = node;
      }
    }
    return !result ? null : result;
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.treeRoot = removeNode(this.treeRoot, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        // equal - should remove this item
        if (!node.left && !node.right) {
          // put null instead of item
          return null;
        }

        if (!node.left) {
          // set right child instead of item
          node = node.right;
          return node;
        }

        if (!node.right) {
          // set left child instead of item
          node = node.left;
          return node;
        }

        // both children exists for this item
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.treeRoot) {
      return;
    }

    let node = this.treeRoot;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.treeRoot) {
      return;
    }

    let node = this.treeRoot;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
