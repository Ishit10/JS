// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. 
// Include a method to display vehicle details. Create a subclass called 'Car' that inherits from
//  the 'Vehicle' class and includes an additional property for the number of doors. 
//  Override the display method to include the number of doors.



class Vehicle {

    make = null;
    model = null;
    year = null;

    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    vehicleDetails() {
        console.log(`${this.make}`);
        console.log(`${this.model}`);
        console.log(`${this.year}`);
        console.log("-------------------");
    }

}

class Car extends Vehicle {
    constructor(make, model, year, doors) {
      super(make, model, year); 
      this.doors = doors;
    }
  
    
    displayDetails() {
      console.log(`Car Details: ${this.year} ${this.make} ${this.model} with ${this.doors} doors`);
    }
  }

  const myVehicle = new Vehicle("Ford", "Mustang GT", 1969);
  myVehicle.displayDetails();
  
 
  const myCar = new Car("Ford", "Mustang GT", 1969, 2);
  myCar.displayDetails();