const car = {
    name:"",
    start: function(){
        console.log(`${this.name} starts working!`);
    },
    stop: function(){
        console.log(`${this.name} stops working!`);
    }
}

const bmw = Object.create(car, { 
    name: {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "bmw"
        }
});

bmw.start();
bmw.stop();