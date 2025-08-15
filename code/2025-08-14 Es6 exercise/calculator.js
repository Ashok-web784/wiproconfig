var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    // Method to add two numbers
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    // Method to subtract two numbers
    Calculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    return Calculator;
}());
// Create an object of Calculator
var calc = new Calculator();
// Test the methods
console.log("Addition:", calc.add(10, 5)); // Output: 15
console.log("Subtraction:", calc.subtract(10, 5)); // Output: 5
