class LinkedList {
    constructor(name) {
        this.name = name;
        // First Element
        this.head = null;
        // Last Element
        this.tail = null;
    }
    append(newNode) {
        // EdgeCase: Only update the old tail, if one exists, could be empty list.
        if (this.tail) {
            // previous tail next pointer set to newNode
            this.tail.next = newNode;
        }
        // Tail is now updated to the newNode
        this.tail = newNode;
        // Edge Case: If empty list, the head must be set after adding a new one
        if (!this.head) {
            this.head = newNode;
        }
    }
    //EdgeCase Empty list, requires setting
    // head and tail nodes
    prepend(newNode) {
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    toConsole() {
        const elements = [];
        let curNode = this.head;
        while (curNode) {
            elements.push(curNode);
            curNode = curNode.next;
        } //while
        return elements;
    } //toArray
    toScreen() {
        const elements = [];
        let curNode = this.head;
        while (curNode) {
            elements.push(curNode.value);
            curNode = curNode.next;
        } //while
        return elements;
    } //toArray
}
export default LinkedList;