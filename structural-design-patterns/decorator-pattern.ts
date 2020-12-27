// Structural Design Patterns
// Decorator pattern

class RallyCar{
  private _brand: string;
  private _model: string;
  private _start: boolean;
  public isUpgraded: boolean;
  public turbo: () => string;

  constructor(brand , model){
    this._brand = brand;
    this._model = model;
    this._start = false;
  }

  public start(): string{
    this._start = true;
    return `${this._brand}-${this._model} is started!`;
  }

  public stop(): string{
    this._start = false;
    return `${this._brand}-${this._model} is stopped!`;
  }
}

function turboDecorator(car: RallyCar){
  car.isUpgraded = true;
  car.turbo = function(){
    const started = this.start();
    return `${started} ${this._brand}-${this._model} works with turbo!`;
  }
  return car;
}

const bmw = turboDecorator(new RallyCar('bmw','sedan'));
const mercedes = turboDecorator(new RallyCar('mercedes','sedan'));

console.log(bmw.turbo());
console.log(mercedes.turbo());
