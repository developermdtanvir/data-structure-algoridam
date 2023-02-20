class Stack {
    constructor() {
        this.stack = [];
    }
    stacks(item) {
        this.stack.push(item)
    }
    dstack() {
        if (this.stack.length) {
            return this.stack.pop()
        }
    }
}
const malish = new Stack()
malish.stacks('Tanvir')
malish.stacks('shakib')
malish.stacks('rakib')
malish.stacks('jamil')
console.log(malish.stack)