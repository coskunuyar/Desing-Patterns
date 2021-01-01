// Behavioral Design Patterns
// Chain of responsibility pattern

class Calculator{
  public value: number;

  constructor(value = 0){
    this.value = value;
  }

  public add(value: number): Calculator{
    this.value += value;
    return this;
  }

  public subtract(value: number): Calculator{
    this.value -= value;
    return this;
  }

  public multiply(value: number): Calculator{
    this.value *= value;
    return this;
  }
}

const calc = new Calculator();
console.log(calc.add(10).add(10).subtract(1).multiply(2).value);
