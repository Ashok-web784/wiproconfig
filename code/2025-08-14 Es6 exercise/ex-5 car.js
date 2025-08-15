
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

     getInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}


class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
        super(make, model, year); 
        this.numDoors = numDoors;
    }

   
    getInfo() {
        return `${super.getInfo()} with ${this.numDoors} doors`;
    }
}

const myVehicle = new Vehicle("BMW", "Top", 2020);
console.log("Vehicle Info:", myVehicle.getInfo()); 
const myCar = new Car("Honda", "Civic", 2022, 4);
console.log("Car Info:", myCar.getInfo()); 
