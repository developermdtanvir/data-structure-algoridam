class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(item) {
        this.queue.push(item)
    }
    dequeue() {
        if (this.queue.length) {
            return this.queue.shift()
        }
    }
}
const pramiks = new Queue()
pramiks.enqueue('Tanvir')
pramiks.enqueue('kamal')
pramiks.enqueue('jamal')
console.log(pramiks.queue)
const winner = pramiks.dequeue()
console.log('winner', winner)
