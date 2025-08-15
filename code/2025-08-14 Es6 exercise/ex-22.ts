class Stack<T> {
    private items: T[] = []; // Array to store stack elements

    // Push an item onto the stack
    push(item: T): void {
        this.items.push(item);
    }

    // Pop an item from the stack
    pop(): T | undefined {
        return this.items.pop();
    }

    // Peek at the top item without removing it
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    // Optional: get the size of the stack
    size(): number {
        return this.items.length;
    }

    // Optional: check if stack is empty
    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

// Example usage:

let numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
numberStack.push(30);

console.log("Top of numberStack:", numberStack.peek()); // 30
console.log("Popped:", numberStack.pop());             // 30
console.log("New top:", numberStack.peek());           // 20

let stringStack = new Stack<string>();
stringStack.push("Hello");
stringStack.push("World");

console.log("Top of stringStack:", stringStack.peek()); // World
console.log("Popped:", stringStack.pop());             // World
console.log("New top:", stringStack.peek());           // Hello
