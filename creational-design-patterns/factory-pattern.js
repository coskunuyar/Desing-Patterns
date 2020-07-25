class Factory{
    constructor(){
        this.createVehicle = function(type){
            if(type === "car") return new Car();
            if(type === "truck") return new Truck();
        }
    }
}

class Car{
    constructor(){
        this.type = "car";
        this.travel = function(destionation){
            return `Traveling to ${destionation}`;
        }
    }
}

class Truck{
    constructor(){
        this.type = "truck";
        this.transport = function(goods){
            return `Transporting ${goods}`;
        }
    }
}

const factory = new Factory();

let car = factory.createVehicle("car");
let truck = factory.createVehicle("truck");

console.log(car.travel("Istanbul"),truck.transport("Gold"));