// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = parseInt(speed);
// };

//Increase  By 10
// Car.prototype.accelerate = function () {
//   console.log((this.speed += 10));
// };

// //Decrease by 5
// Car.prototype.brake = function () {
//   console.log((this.speed -= 5));
// };

// const bmw = new Car("Bmw", "120 km/h");
// const mercedes = new Car("Mercedes", "95 km/h");

// For BMW
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    return `${(this.speed += 10)} km/h`;
  }

  brake() {
    console.log(`${(this.speed -= 5)} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    return (this.speed = speed * 1.6);
  }
}

// const bmw = new CarCl("Bmw", 120);
// const mercedes = new CarCl("Mercedes", 95);
// const ford = new CarCl("Ford", 120);

// console.log(ford.accelerate());
// console.log(ford.accelerate());
// console.log(ford.brake());
// console.log(ford.speedUS);
// ford.speedUS = 50;
// console.log(ford);

// challenge 3
class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    console.log((this.#charge = chargeTo));
    return this;
  }

  accelerate() {
    console.log(`Tesla going at ${(this.speed += 20)}
 km/h, with a charge of ${this.#charge--}%`);

    return this;
  }
}

const rivian = new EVCl("Rivian", 120, 23);
console.log(rivian);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .brake()
  .brake()
  .brake()
  .chargeBattery(90)
  .chargeBattery(90)
  .chargeBattery(90)
  .accelerate()
  .accelerate()
  .accelerate()
  .chargeBattery(90)
  .chargeBattery(90);

// const tesla = new EVCl("Tesla", 120, 23);
// console.log(tesla);
// console.log(tesla.accelerate());
// console.log(tesla.chargeBattery(90));

// console.log(tesla);
// console.log(tesla.brake());

// console.log(tesla.accelerate());
// console.log(tesla.accelerate());
// console.log(tesla.accelerate());

// console.log(tesla);
// console.log(tesla.charge);
