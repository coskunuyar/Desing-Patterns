// Behaviroal Design Patterns
// Chain of responsibility patttern

class Calculator{
  public value: number;

  constructor(value = 10){
    this.value = value;
  } 

  public add(value: number): Calculator {
    this.value += value;
    return this;
  }

  public substract(value: number): Calculator{
    this.value -= value;
    return this;
  }
}

const calc = new Calculator(5);
console.log(calc.add(10).add(10).substract(1).value);
