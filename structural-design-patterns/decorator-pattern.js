class Car{
    constructor(name,price){
        this.description = {
            name,
            price
        }
    }

    getDetails(){
        let keys = Object.keys(this.description);
        let values = Object.values(this.description);
        keys.forEach((key,index) => {
            console.log(`${key} : ${values[index]}`);
        })
    }
}

function upgradedVersion(car){
    car.description.price += 1000;
    car.description.hasUpgraded = true;
    return car;
}

function reducedVersion(car){
    car.description.price -= 1000;
    car.description.isReduced = true;
    return car;
}

let bmwUp = upgradedVersion(new Car('BMW',2000));
bmwUp.getDetails();

let bmwDown = reducedVersion(new Car('BMW',2000));
bmwDown.getDetails();