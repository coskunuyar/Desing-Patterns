class VehicleFactory{
    constructor(){
        this.createVehicle = function(type){
            let vehicle = {};
            if(type === "car"){
                vehicle = new Car();
            }else if(type === "bus"){
                vehicle = new Bus();
            }
            vehicle.drive = function(){
                console.log(`Driving ${vehicle.type}`);
            };
            return vehicle;
        }.bind(this);
    }
}

class Car{
    constructor(){
        this.type = "car";
        this.cleanSeats = function(){
            console.log("Cleaning seats.");
        }
    }
}

class Bus{
    constructor(){
        this.type = "bus";
        this.serveCustomers = function(){
            console.log("Serving Customers.")
        }
    }
}

let factory = new VehicleFactory();

let bmw = factory.createVehicle("car");
bmw.drive();
bmw.cleanSeats();

let biky = factory.createVehicle("bus");
biky.drive();
biky.serveCustomers();