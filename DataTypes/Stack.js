class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * Stack implemention using Singly Linked List
 * Stack Methods
 *  1)  Push(val)
 *  2)  Pop()
 *  3)  Peek()
 */
class Stack {

    constructor() {
        this.head = null;
    }

    push(val) {
        let node = new Node(val);
        if (!this.head) this.head = node;
        else {
            node.next = this.head;
            this.head = node;
        }
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        let nodeTOpop = this.head;
        this.head = this.head.next;
        return nodeTOpop.val;
    }

    peek(){
        if(!this.head) return undefined;
        return this.head.val;

    }

}

let stack = new Stack();
stack.push(5);
stack.push(4);
stack.push(53);
stack.push(56);
console.log(stack);
console.log(stack.push(0));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);
console.log(stack.peek())
console.log(stack);




