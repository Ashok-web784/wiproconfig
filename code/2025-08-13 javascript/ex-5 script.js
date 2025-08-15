

var x = 4;        
const z = 9;     

function f() {
    
    x = 9;

    let y = 8;    
    console.log("x inside function: " + x); 
    console.log("y inside function: " + y); 

    if (true) {
        let z = 18; 
        console.log("y inside if block: " + y); 
        console.log("z inside if block: " + z); 
    }

    console.log("z in function (global const): " + z); 
}

f(); 

console.log("x outside function: " + x); 

console.log("z outside function: " + z); 