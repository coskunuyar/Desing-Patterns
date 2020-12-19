// Creational Design Patters
// Factory

class Factory{
  constructor(name){
    this._name = name;
    this.produce = function(type){
      let item;

      if(type === 'car'){
        item = new Car();
      }else if(type === 'truck'){
        item = new Truck();
      }

      item.getProducerInfo = function(){
        return `Producer is ${this._name}.`;
      }.bind(this);

      return item;
    }
  }
}

class Car{
  constructor(model){
    this._type = 'Car';
    this._model = model;
    this.start = function(){
      return `${this._type} is started! Car`;
    }
  }
}

class Truck{
  constructor(model){
    this._type = 'Truck';
    this._model = model;
    this.start = function(){
      return `${this._type} is stared! Truck`
    }
  }
}

const factory = new Factory('Mercedes');
const vehicle1 = factory.produce('car');
const vehicle2 = factory.produce('truck');

console.log(vehicle1.start());
console.log(vehicle1.getProducerInfo());

console.log(vehicle2.start());
console.log(vehicle2.getProducerInfo());
