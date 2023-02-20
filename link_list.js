class Node {
    constructor(value) {
        this.value = value;
        this.next = null;

    }
}

class LinkedList {
    constructor(head) {
        this.head = head;

    }

    add(value) {
        const newNode = new Node(value);

        // this.head.next = newNode;
        let current = this.head

        while (current.next != null) {
            current = current.next;
        }

        current.next = newNode
    }
}

const head = new Node(1500)
const mBondhon = new LinkedList(head)

mBondhon.add(27)
mBondhon.add(30)

console.log(mBondhon) /* output : LinkedList {
    head: Node { value: 1500, next: Node { value: 27, next: [Node] } }
  } */