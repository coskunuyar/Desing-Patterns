// Structural Design Patterns
// Adapter pattern

class OldCalc{
  public operation(value1: number , value2: number , operation: string): number{
    if(operation === 'add'){
      return value1 + value2;
    }else if(operation === 'subtract'){
      return value1 - value2;
    }
  }
}

// a beauftiful class with clean architecture
class NewCalc{
  history: { type: string , result: number }[];
  constructor(){
    this.history = [];
  }

  public add(value1: number , value2: number): number{
    const result = value1 + value2;
    this.history.push({ type: 'add' , result })
    return result;
  }

  public subtract(value1: number , value2: number): number{
    const result = value1 - value2;
    this.history.push({ type: 'subtract' , result })
    return result;
  }
}

class AdapterClass{
  public operation(value1:number , value2: number , operation: string): number{
    const newCalc = new NewCalc();
    if(operation === 'add'){
      return newCalc.add(value1,value2)
    }else if(operation === 'subtract'){
      return newCalc.subtract(value1,value2);
    }
  }
}

const calculatorSample = new AdapterClass();
console.log(calculatorSample.operation(10,5,'add'));
console.log(calculatorSample.operation(10,5,'subtract'));
