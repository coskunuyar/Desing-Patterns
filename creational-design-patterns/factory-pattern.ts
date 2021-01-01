// Creational Design Patterns
// Factory Pattern

class Factory{
  private _name: string;
  public produce: (type: 'car' | 'truck' , model: number) => Car | Truck;
  public getProducerInfo: () => string;

  constructor(name: string){
    this._name = name;
    this.produce = function(type , model){
      let item: Car | Truck;

      if(type === 'car'){
        item = new Car(model);
      }else if(type === 'truck'){
        item = new Truck(model);
      }
      item.getProducerInfo = function(){
        return `Producer is ${this._name}.`;
      }.bind(this);

      return item;
    }
  }
}

class Car{
  private _type: string;
  private _model: number;
  public start: () => string;
  public getProducerInfo: () => string;

  constructor(model: number){
    this._type = 'Car';
    this._model = model;
    this.start = function(){
      return `${this._type} is started! Car`;
    }
  }
}

class Truck{
  private _type: string;
  private _model: number;
  public start: () => string;
  public getProducerInfo: () => string;

  constructor(model: number){
    this._type = 'Truck';
    this._model = model;
    this.start = function(){
      return `${this._type} is started! Truck`;
    }
  }
}

const factory = new Factory('Mercedes');
const vehicle1 = factory.produce('car', 2019);
const vehicle2 = factory.produce('truck', 2019);

console.log(vehicle1.start());
console.log(vehicle1.getProducerInfo());
