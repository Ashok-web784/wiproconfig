var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    return Box;
}());
// Example usage:
var numberBox = new Box(123);
console.log(numberBox.getValue()); // 123
var stringBox = new Box("Hello World");
console.log(stringBox.getValue()); // Hello World
