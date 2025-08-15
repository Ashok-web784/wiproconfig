function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

// Example usage:
let result1 = pair<number, string>(1, "Hello");
console.log(result1); // [ 1, 'Hello' ]

let result2 = pair<boolean, number>(true, 42);
console.log(result2); // [ true, 42 ]
