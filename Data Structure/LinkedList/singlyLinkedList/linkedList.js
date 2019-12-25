'use strict';

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        if (!this.head) {
            this.head = this.tail = new Node(val);
        } else {
            let newNode = new Node(val);
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // The "Runner" Technique
    // iterate linked list with two pointers simultaneously 

    pop() {

        if (this.length === 0) return undefined;
        if (this.length === 1) {
            let node = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return node;
        } else {
            let preNode = this.head;
            let tmpNode = this.head.next;

            while (tmpNode.next != null) {
                preNode = preNode.next;
                tmpNode = preNode.next;
            }

            preNode.next = null;
            this.tail = preNode;
            this.length--;
            return tmpNode;
        }
    }

    shift() {
        if (this.length === 0) return undefined;
        if (this.length === 1) {
            let node = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return node;
        } else {
            let tmpHead = this.head;
            this.head = this.head.next;
            this.length--;
            return tmpHead;
        }
    }

    unShift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index > this.length) return undefined;
        let counter = 0;
        let getNode = this.head;
        while (counter < index) {
            getNode = getNode.next;
            counter++;
        }
        return getNode;
    }


    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length - 1) {
            this.push(val);
            return true;
        }
        if (index === 0) {
            this.unShift(val);
            return true;
        }
        let newNode = new Node(val);
        let currentNode = this.get(index - 1);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length++;
        return true;;
    }

    remove(index) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length - 1) {
            this.pop(val);
            return true;
        }
        if (index === 0) {
            this.shift(val);
            return true;
        }
        let preNode = this.get(index - 1);
        let delNode = preNode.next;
        preNode.next = delNode.next;
        this.length--;
        return delNode;
 
    }

    reverse() {
        // swap head and tail
        let tmpNode;
        tmpNode = this.head;
        this.head = this.tail;
        this.tail = tmpNode;

        let preNode = null;
        let currentNode = tmpNode;
        let nextNode;
        for (let i = 0; i < this.length; i++) {
            nextNode = currentNode.next;
            currentNode.next = preNode;
            preNode = currentNode;
            currentNode = nextNode;
        }
        return this;

    }
}



let a = new SinglyLinkedList();
a.push(55);
// a.push(51);
// a.push(59);

console.log("a-->", a);
a.unShift(5);
console.log("a-->", a);
// a.pop();

console.log("a-->", a);
a.unShift(15);
console.log("a-->", a);

a.get(1);
a.insert(1, 65);
console.log("a-->", a);
console.log("a-->", a.remove(1));
console.log("a-->", a);

a.reverse();

console.log("a------->", a);
// let a = new Node(5);
// a.next = new Node(6);
// a.next.next = new Node(7);
// a.next.next.next = new Node(9);
// console.log(a);