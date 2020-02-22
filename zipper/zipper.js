//
// This is only a SKELETON file for the 'Zipper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
import {cloneDeep} from 'lodash';

export class Zipper {
  constructor(tree, prevNode = null) {

    this.data = cloneDeep(tree);
    this.focus = this.data;

    this.prevNode = prevNode;
  }

  static fromTree(tree) {
   return new Zipper(tree); 
  }

  toTree() {
    return this.data;
  }

  value() {
   return this.focus.value; 
  }

  left() {
    if(this.focus.left == null) return null;
    this.prevNode = this.focus;
    this.focus = this.focus.left;
    
    return this;
  }

  right() {
    if(this.focus.right == null) return null;
    this.prevNode = this.focus;
    this.focus = this.focus.right;
    
    return this;
  }

  up() {
    if(this.prevNode == null) return null;
    this.focus = this.prevNode;

    return this;
  }

  setValue(nodeVal) {
    this.focus.value = nodeVal;

    return this;
  }

  setLeft(newNode) {
    this.focus.left = newNode;
    return this;
  }

  setRight(newNode) {
    this.focus.right = newNode;

    return this;
  }
}