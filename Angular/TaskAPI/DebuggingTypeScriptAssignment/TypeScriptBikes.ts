class Bike {
    price: number;
    max_speed: number;
    miles: number;
 
    constructor(price: number, max_speed: number) {
       this.price = price;
       this.max_speed = max_speed;
       this.miles = 0;
    }
 
    displayInfo() {
       console.log("Here is the info: " + `${this.price}, ${this.max_speed}, ${this.miles}`);
       return this;
    }
 
    ride() {
       console.log("Riding...");
       this.miles += 10;
       return this; 
    }
    
    reverse() {
       console.log("Reversing...");
       if (this.miles < 10) {
          console.log("Can't reverse 10, but I will go to 0!");
          this.miles = 0;
          return this;
       } else {
          this.miles -= 10;
          return this;
       }
    }
 }
 
 let bike1: Bike = new Bike(500, 25);
 
 bike1.displayInfo().ride().ride().displayInfo().reverse().reverse().reverse().ride().displayInfo()