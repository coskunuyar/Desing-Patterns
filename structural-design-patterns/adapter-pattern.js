class OldCalculator{
    constructor(){
        this.operations = function(term1, term2,operation){
            if(operation === "add"){
                return term1 + term2;
            }else if(operation === "sub"){
                return term1 - term2;
            }else{
                return NaN;
            }
        }
    }
}

class NewCalculator{
    constructor(){
        this.add = function(term1,term2){
            return term1 + term2;
        }
        this.sub = function(term1,term2){
            return term1 - term2;
        }
    }
}

class CalcAdapter{
    constructor(){
        this.operations = function(term1,term2,operation){
            let localCalc = new NewCalculator();
            if(operation === "add"){
                return localCalc.add(term1,term2);
            }else if(operation === "sub"){
                return localCalc.sub(term1,term2);
            }else{
                return NaN;
            }
        }
    }
}

const oldCalc = new OldCalculator();
console.log(oldCalc.operations(10, 5, 'add'));

const newCalc = new NewCalculator();
console.log(newCalc.add(10, 5));

const adaptedCalc = new CalcAdapter();
console.log(adaptedCalc.operations(10, 5, 'add'));