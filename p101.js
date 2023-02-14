class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        return this.items.push(element);
    }
    dequeue() {
        if(this.items.length > 0) {
            return this.items.shift();
        }
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty(){
       return this.items.length == 0;
    }
    size(){
        return this.items.length;
    }
    clear(){
        this.items = [];
    }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(22);
queue.enqueue(14);
queue.enqueue(800);
console.log(queue.items);

queue.dequeue();
console.log(queue.items);

console.log(queue.peek());

console.log(queue.isEmpty());

console.log(queue.size());

queue.clear();
console.log(queue.items);