// Structural Design Patterns
// Decorator pattern

class Car{
  constructor(brand , model){
    this._brand = brand;
    this._model = model;
    this._start = false;
  }

  start(){
    this._start = true;
    return `${this._brand}-${this._model} is started!`;
  }

  stop(){
    this._start = false;
    return `${this._brand}-${this._model} is stopped!`;
  }
}

function turboDecorator(car){
  car.isUpgraded = true;
  car.turbo = function(){
    const started = this.start();
    return `${started} ${this._brand}-${this._model} works with turbo!`;
  }
  return car;
}

const bmw = turboDecorator(new Car('bmw','sedan'));
const mercedes = turboDecorator(new Car('mercedes','sedan'));

console.log(bmw.turbo());
console.log(mercedes.turbo());
