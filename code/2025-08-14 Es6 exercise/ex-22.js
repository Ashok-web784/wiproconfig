var Stack = /** @class */ (function () {
    function Stack() {
        this.items = []; // Array to store stack elements
    }
    // Push an item onto the stack
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    // Pop an item from the stack
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    // Peek at the top item without removing it
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    // Optional: get the size of the stack
    Stack.prototype.size = function () {
        return this.items.length;
    };
    // Optional: check if stack is empty
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    return Stack;
}());
// Example usage:
var numberStack = new Stack();
numberStack.push(10);
numberStack.push(20);
numberStack.push(30);
console.log("Top of numberStack:", numberStack.peek()); // 30
console.log("Popped:", numberStack.pop()); // 30
console.log("New top:", numberStack.peek()); // 20
var stringStack = new Stack();
stringStack.push("Hello");
stringStack.push("World");
console.log("Top of stringStack:", stringStack.peek()); // World
console.log("Popped:", stringStack.pop()); // World
console.log("New top:", stringStack.peek()); // Hello
