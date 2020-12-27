// Behaviroal Design Patterns
// Template patttern

class EmployeeTemplate{
  protected _name: string;
  protected _salary: number;

  constructor(name: string,salary: number){
    this._name = name;
    this._salary = salary;
  }

  public pay(): string{
    return `name: ${this._name} , salary: ${this._salary} paid!`;
  }
}

class Developer extends EmployeeTemplate{
  constructor(name: string,salary: number){
    super(name,salary);
  }

  public work(): string{
    return `${this._name} is doing development!`
  }
}


class Tester extends EmployeeTemplate{
  constructor(name: string ,salary: number){
    super(name,salary);
  }

  public work(): string{
    return `${this._name} is doing testing!`
  }
}


const developer1 = new Developer('coskun',5000)
console.log(developer1.work());

const tester1 = new Tester('xxxxxx',5000);
console.log(tester1.work());
