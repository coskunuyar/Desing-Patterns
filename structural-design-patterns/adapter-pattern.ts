// Structural Design Patterns
// Adapter pattern

class OldCalc{
  public operation(value1: number , value2: number , operation: string): number{
    if(operation === 'add'){
      return value1 + value2;
    }else if(operation === 'substract'){
      return value1 - value2;
    }
  }
}

class NewCalc{
  history: { type:string , result: number}[];
  constructor(){
    this.history = [];
  }

  public add(value1: number , value2: number): number{
    const result = value1 + value2;
    this.history.push({ type: 'add' , result });
    return result;
  }

  public substract(value1: number , value2: number): number{
    const result = value1 - value2;
    this.history.push({ type: 'subtract' , result });
    return result;
  }
}

class Adapter{
  public operation(value1: number , value2: number , operation: string): number{
    const newCalc = new NewCalc();
    if(operation === 'add'){
      return newCalc.add(value1,value2);
    }else{
      return newCalc.substract(value1,value2);
    }
  }
}

const calculatorSample = new Adapter();
console.log(calculatorSample.operation(10,5,'add'));
console.log(calculatorSample.operation(10,5,'subtract'));
