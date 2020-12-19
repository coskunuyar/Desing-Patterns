// Structural Design Patterns
// Adapter pattern

class OldCalc{
  operation(value1 , value2 , operation){
    if(operation === 'add'){
      return value1 + value2;
    }else if(operation === 'subtract'){
      return value1 - value2;
    }
  }
}

// a beauftiful class with clean architecture
class NewCalc{
  constructor(){
    this.history = [];
  }

  add(value1 , value2){
    const result = value1 + value2;
    this.history.push({ type: 'add' , result })
    return result;
  }

  subtract(value1 , value2){
    const result = value1 - value2;
    this.history.splice({ type: 'subtract' , result })
    return result;
  }
}

class AdapterClass{
  operation(value1 , value2 , operation){
    const newCalc = new NewCalc();
    if(operation === 'add'){
      return newCalc.add(value1,value2)
    }else if(operation === 'subtract'){
      return newCalc.subtract(value1,value2);
    }
  }
}

const calc = new AdapterClass();
console.log(calc.operation(10,5,'add'));
console.log(calc.operation(10,5,'subtract'))
