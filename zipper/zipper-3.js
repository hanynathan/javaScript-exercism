export class Zipper {
	constructor(value, left, right, up = null) {
	  this._value = value
	  this._left = left
	  this._right = right
	  this._up = up
	}
  
	static fromTree(tree) {
	  if(tree) {
		const value = tree.value
		const left = tree.left
		  ? Zipper.fromTree(tree.left)
		  : null
		const right = tree.right
		  ? Zipper.fromTree(tree.right)
		  : null
		return new Zipper(value, left, right)
	  }
	  return null
	}
  
	toTree(node) {
	  if(node) {
		return {
		  value: node._value,
		  left: node._left
			? node._left.toTree(node._left)
			: null,
		  right: node._right
			? node._right.toTree(node._right)
			: null,
		}
	  } else {
		let up = this
		while(up._up) up = up._up
		return this.toTree(up)
	  }
	}
  
	value() {
	  return this._value
	}
  
	left() {
	  if(this._left) this._left._up = this
	  return this._left
	}
  
	right() {
	  if(this._right) this._right._up = this
	  return this._right
	}
  
	up() {
	  return this._up
	}
  
	setValue(value) {
	  this._value = value
	  return this
	}
  
	setLeft(tree) {
	  if(this._left) this._left._up = this
	  this._left = Zipper.fromTree(tree)
	  return this
	}
  
	setRight(tree) {
	  if(this._right) this._right._up = this
	  this._right = Zipper.fromTree(tree)
	  return this
	}
  }