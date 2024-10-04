// Write a JavaScript program to create a class called 'Rectangle' with properties for width and height.
//  Include two methods to calculate rectangle area and perimeter. 
//  Create an instance of the 'Rectangle' class and calculate its area and perimeter.


class Rectangle{
    width = null;
    height = null;

    constructor(width, height){
        this.width = width;
        this.height = height
    }

    areaOfRectangle(){
         let area = this.width * this.height;
         console.log(`Area of rectangle is ${area}`);
         
    }

    perimeter(){
        let area = 2 * (this.width + this.height);
        console.log(`perimeter is ${area}`);
        
   }
}


let ra1 = new Rectangle(32,4);
ra1.areaOfRectangle();
let rp1 = new Rectangle(2,30);
rp1.areaOfRectangle();