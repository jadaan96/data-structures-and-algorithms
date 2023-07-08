const Node =require('../node')

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
}
module.exports = Stack;