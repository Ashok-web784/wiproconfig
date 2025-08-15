
const numbers = [10, 20, 30, 40];

const sumArray = arr => arr.reduce((acc, curr) => acc + curr, 0);

const total = sumArray(numbers);

console.log("Sum of array:", total);
document.write("Sum of array: " + total);
