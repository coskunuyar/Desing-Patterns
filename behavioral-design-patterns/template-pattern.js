// Behaviroal Design Patterns
// Template patttern

class EmployeeTemplate{
  constructor(name,salary){
    this._name = name;
    this._salary = salary;
  }

  pay(){
    return `name: ${this._name} , salary: ${this._salary} paid!`;
  }
}

class Developer extends EmployeeTemplate{
  constructor(name,salary){
    super(name,salary);
  }

  work(){
    return `${this._name} is doing development!`
  }
}


class Tester extends EmployeeTemplate{
  constructor(name,salary){
    super(name,salary);
  }

  work(){
    return `${this._name} is doing testing!`
  }
}


const developer1 = new Developer('coskun','100k $')
console.log(developer1.work());

const tester1 = new Tester('xxxxxx','80k $');
console.log(tester1.work());
