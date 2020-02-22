export class Zipper {
	constructor (tree) {
	  this.root = JSON.parse(JSON.stringify(tree))
  
	  this.stack = []
	  this.focus = this.root
	  console.log('------------------',this.focus, '********',this);
	  
	}
  
	static fromTree (tree) {
	  return new Zipper(tree)
	}
  
	toTree () {
	  return this.root
	}
  
	value () {
	  return this.focus.value
	}
  
	left () {
	  this.stack.push(this.focus)
	  this.focus = this.focus.left
	  return this.focus ? this : null
	}
  
	right () {
	  this.stack.push(this.focus)
	  this.focus = this.focus.right
	  return this.focus ? this : null
	}
  
	up () {
	  this.focus = this.stack.pop()
	  return this.focus ? this : null
	}
  
	setValue (value) {
	  this.focus.value = value
	  return this
	}
  
	setLeft (node) {
	  this.focus.left = node
	  return this
	}
  
	setRight (node) {
	  this.focus.right = node
	  return this
	}
  }