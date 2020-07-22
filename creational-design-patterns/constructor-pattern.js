function Country(name,flag){
    this.name = name;
    this.flag = flag;
    this.getDetailts = function(){
        return `Name: ${this.name} , Flag: ${this.flag}`;
    }.bind(this);
}

class Country{
    constructor(name,flag){
        this.name = name;
        this.flag = flag;
        this.getDetailts = function(){
            return `Name: ${this.name} , Flag: ${this.flag}`;
        }.bind(this);
    }
}

let USA = new Country("USA","***");
let caller = USA.getDetailts;
console.log(caller());