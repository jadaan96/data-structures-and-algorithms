'use strict'
class Node {
    constructor(value){
        this.value=value;
        this.next=null

    }
}
class Stack{
    constructor(){
        this.top=null;
        this.length=0;

    }
    isEmpty() {
        return this.top === null;}
    push(value){
        const newNode = new Node(value)
        if (this.isEmpty()){
            this.top=newNode
        }else{
           newNode.next=this.top
            this.top=newNode
        }
        this.length++;
    }
    pop() {
        if(this.isEmpty()) throw new Error('the stack is empty');
    
        const temp = this.top;
            this.top = this.top.next;
        temp.next = null;
         this.length--;
        return temp.value;
      }
    
      peek() {
        if(this.isEmpty()) throw new Error('the stack is empty');
    
        return this.top.value;
      }


validateBrackets(expr) {
    let stack = new Stack();

    for (let i = 0; i < expr.length; i++) {
      let x = expr[i];

      if (x === "(" || x === "[" || x === "{") {
        stack.push(x);
        continue;
      }
      if (stack.length === 0) return false;
      let check;
      switch (x) {
      case ")":
        check = stack.pop();
        if (check === "{" || check === "[") return false;
        break;
      case "}":
        check = stack.pop();
        if (check === "(" || check === "[") return false;
        break;
      case "]":
        check = stack.pop();
        if (check === "(" || check === "{") return false;
        break;
      }
    }
    return true;
  }



}
module.exports = Stack;