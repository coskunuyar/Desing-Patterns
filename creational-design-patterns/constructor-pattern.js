function Country(name,region){
    this.name = name;
    this.region = region;
    this.identify = function(){
        return `Name: ${this.name} , Region: ${this.region}`;
    }
}

class Country{
    constructor(name,region){
        this.name = name;
        this.region = region;
        this.identify = function(){
            return `Name: ${this.name} , Region: ${this.region}`;
        }
    }
}

let canada = new Country("Canada","North America");
let mexico = new Country("Mexico","South America");

console.log(canada.identify());
console.log(mexico.identify());