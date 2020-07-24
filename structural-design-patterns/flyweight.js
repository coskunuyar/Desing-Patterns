class IceCream{
    constructor(flavour,price){
        this.flavour = flavour;
        this.price = price;
    }
}

class IceCreamFactory{
    constructor(){
        this._icecreams = [];
    }

    createIcecream(flavour,price){
        let icecream = this.getIcecream(flavour);
        if(icecream){
            return icecream;
        }else{
            const newIcecream = new IceCream(flavour,price);
            this._icecreams.push(newIcecream);
            return newIcecream;
        }
    }

    getIcecream(flavour){
        return this._icecreams.find(icecream => icecream.flavour === flavour);
    }
}

const factory = new IceCreamFactory();

const chocoVanilla = factory.createIcecream('chocolate and vanilla',15);
const vanillaChoco = factory.createIcecream('chocolate and vanilla',15);

console.log(chocoVanilla === vanillaChoco);