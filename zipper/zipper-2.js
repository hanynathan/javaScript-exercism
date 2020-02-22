//
// This is only a SKELETON file for the 'Zipper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
class Node {
	constructor({ value, left, right }, up = null) {
	  this.up = up;
	  this.left = left ? new Node(left, this) : null;
	  this.right = right ? new Node(right, this) : null;
	  this.value = value;
	}
  
	static fromTree(node, up = null) {
	  return node === null ? null : new Node(node, up);
	}
  
	toTree() {
	  return {
		value: this.value,
		left: this.left ? this.left.toTree() : null,
		right: this.right ? this.right.toTree() : null,
	  };
	}
  }
  
  export class Zipper {
	constructor(tree) {
	  this.root = tree ? Node.fromTree(tree) : null;
	  this.focus = this.root;
	}
  
	static fromTree(tree) {
	  return new Zipper(tree);
	}
  
	toTree() {
	  return this.root.toTree();
	}
  
	value() {
	  return this.focus.value;
	}
  
	left() {
	  if (!this.focus.left) return null;
	  this.focus = this.focus.left;
	  return this;
	}
  
	right() {
	  if (!this.focus.right) return null;
	  this.focus = this.focus.right;
	  return this;
	}
  
	up() {
	  if (!this.focus.up) return null;
	  this.focus = this.focus.up;
	  return this;
	}
  
	setValue(value) {
	  this.focus.value = value;
	  return this;
	}
  
	setLeft(tree) {
	  this.focus.left = Node.fromTree(tree, this.focus);
	  return this;
	}
  
	setRight(tree) {
	  this.focus.right = Node.fromTree(tree, this.focus);
	  return this;
	}
  }