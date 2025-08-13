
// Global scope variables
var x = 4;        // Can be reassigned and accessed anywhere
const z = 9;      // Constant, cannot be reassigned

function f() {
    // Changing global variable x
    x = 9;

    let y = 8;    // Block scoped variable (only inside function or block)

    console.log("x inside function: " + x); // Accessible, modified value
    console.log("y inside function: " + y); // Accessible here

    if (true) {
        let z = 18; // This 'z' is different from the global z (block scoped)
        console.log("y inside if block: " + y); // Accessible (function scope)
        console.log("z inside if block: " + z); // This is local z
    }

    console.log("z in function (global const): " + z); // Refers to global z = 9
}

f(); // Function call

console.log("x outside function: " + x); // Accessible (var is global)
// console.log("y outside function: " + y); // ❌ ERROR: y is not accessible here
console.log("z outside function: " + z); // Accessible (global const)
