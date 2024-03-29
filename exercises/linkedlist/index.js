// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
 }

class LinkedList { 
    constructor() {
        this.head = null;
    }

    insertFirst(data) { 
        this.head = new Node(data, this.head);
    }

    size() {
        let size = 0
        let node = this.head;
        while (node) {
            size++;
            node = node.next;
        }
        return size;
    }

    getFirst() {
        return this.head;
    }

    removeFirst() {
        if (!this.head) { return; }
        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
        }
    }

    getLast() {
        if (!this.head) { return; }
        let node = this.head;
        while (node) {
            if (!node.next) { return node; }
            node = node.next;
        }
    }

    removeLast() {
        if (!this.head) { return; }
        if (!this.head.next) { 
            this.head = null
            return;
        }
        let previous = this.head;
        let node = previous.next;
        while(node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    insertLast(data) {
        if (!this.head) { 
            this.head = new Node(data);
            return;
        }
        let node = this.getLast();
        node.next = new Node(data);
    }

    getAt(index) {
        let node = this.head;
        let counter = 0;
        while (node) {
            if (counter == index) {
                return node;
            }
            node = node.next;
            counter++;
        }
        return null;
    }

    removeAt(index) {
        if (!this.head) { return; }
        if (index === 0) { 
            this.head = this.head.next; 
            return;
        }
        let previous = this.getAt(index - 1);
        if (!previous || !previous.next) { return; }
        previous.next = previous.next.next;
    }

    insertAt(data, index) {
        if (!this.head) { this.head = new Node(data); }
        if (index === 0) {
            this.head = new Node(data, this.head);
        }
        let previous = this.getAt(index-1) || this.getLast();
        if (previous) {
            previous.next = new Node(data, previous.next);
            return;
        }
    }

    forEach(fx) {
        if (!this.head) { return; }
        let node = this.head;
        let counter = 0;
        while (node) {
            fx(node, counter);
            node = node.next;
            counter++;
        }  
    }

    *[Symbol.iterator]() {
        if (!this.head) { return; }
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }  
    }

    clear() {
        if (this.head) { 
            this.head = null;
        }
    }
}

module.exports = {Node, LinkedList};
