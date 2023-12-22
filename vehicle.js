// Vehicle constructor function
function Vehicle(brand, model, speed, fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = speed || 0;
    this.fuelType = fuelType || 'Unknown';
  }
  
  // Adding common methods to the Vehicle prototype
  Vehicle.prototype.accelerate = function(increment) {
    this.speed += increment || 10;
    console.log(`${this.brand} ${this.model} is accelerating. Current speed: ${this.speed} mph`);
  };
  
  Vehicle.prototype.brake = function(decrement) {
    this.speed -= decrement || 5;
    console.log(`${this.brand} ${this.model} is braking. Current speed: ${this.speed} mph`);
  };
  
  Vehicle.prototype.refuel = function() {
    console.log(`${this.brand} ${this.model} is refueling.`);
  };
  
  // Car constructor function inheriting from Vehicle
  function Car(brand, model, speed, fuelType, numberOfWheels) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfWheels = numberOfWheels || 4;
  }
  
  // Inheriting from Vehicle
  Car.prototype = Object.create(Vehicle.prototype);
  Car.prototype.constructor = Car;
  
  // Adding an additional method to Car
  Car.prototype.honk = function() {
    console.log(`${this.brand} ${this.model} is honking!`);
  };
  
  // Airplane constructor function inheriting from Vehicle
  function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfEngines = numberOfEngines || 2;
    this.hasLandingGear = hasLandingGear || true;
  }
  
  // Inheriting from Vehicle
  Airplane.prototype = Object.create(Vehicle.prototype);
  Airplane.prototype.constructor = Airplane;
  
  // Adding an additional method to Airplane
  Airplane.prototype.takeOff = function() {
    console.log(`${this.brand} ${this.model} is taking off!`);
  };
  
  // Creating instances of Car and Airplane
  const myCar = new Car('Toyota', 'Camry', 0, 'Gasoline', 4);
  const myAirplane = new Airplane('Boeing', '747', 0, 'Jet Fuel', 4, true);
  
  // Demonstrating methods invocation
  myCar.accelerate();
  myCar.brake();
  myCar.refuel();
  myCar.honk();
  
  myAirplane.accelerate();
  myAirplane.brake();
  myAirplane.refuel();
  myAirplane.takeOff();