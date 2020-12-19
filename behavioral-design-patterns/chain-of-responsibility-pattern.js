// Behaviroal Design Patterns
// Chain of responsibility patttern

class Calculator{
  constructor(value = 0){
    this.value = value;
  }

  add(value){
    this.value += value;
    return this;
  }

  substract(value){
    this.value -= value;
    return this;
  }
}

const calc = new Calculator(5);
console.log(calc.add(10).add(10).substract(1).value);
