class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
/**
 * 
 */
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        return this;
    }

    dequeue() {
        if (!this.head) return undefined;
        else {
            let dequeueNode = this.head;
            this.head = this.head.next;
            return dequeueNode.val;
        }
    }
}


let queue = new Queue();
queue.enqueue(4)
queue.enqueue(9)
queue.enqueue(47)
queue.enqueue(24)
console.log(queue);
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
queue.enqueue(47)
console.log(queue.dequeue())