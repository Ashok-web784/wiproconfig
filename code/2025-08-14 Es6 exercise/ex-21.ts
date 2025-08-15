class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

// Example usage:
let numberBox = new Box<number>(123);
console.log(numberBox.getValue()); // 123

let stringBox = new Box<string>("Hello World");
console.log(stringBox.getValue()); // Hello World
