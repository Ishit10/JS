// Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.



class Product {
    constructor(productId, name, price) {
        this.productId = productId; 
        this.name = name;          
        this.price = price;        
    }

    totalPrice(quantity) {
        return this.price * quantity;
    }
}

class PersonalCareProduct extends Product {
    constructor(productId, name, price, warrantyPeriod) {
        super(productId, name, price); 
        this.warrantyPeriod = warrantyPeriod; 
    }

    totalPrice(quantity) {
        const basePrice = super.totalPrice(quantity); 
        const warrantyCost = this.calculateWarrantyCost();
        return basePrice + warrantyCost; 
    }

   
    calculateWarrantyCost() {
        return this.warrantyPeriod * 5; 
    }
}


const shampoo = new PersonalCareProduct(101, "Shampoo", 15, 2); 


const quantity = 3;
const total = shampoo.totalPrice(quantity);


console.log(`Total price for ${quantity} units of ${shampoo.name} (with warranty): ${total}`);
