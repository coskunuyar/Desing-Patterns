// Behaviroal Design Patterns
// Mediator patttern

interface Friend{
  name: string;
  location: string
}

class HeadQuarter{
  private employees: Employee[];

  constructor(){
    this.employees = [];
  }

  public register(employee: Employee): void {
    this.employees.push(employee);
  }
  
  public getEmployees(employee: Employee): Friend[]{
    return this.employees.filter(person => person !== employee)
                         .map(person => ({ name: person.name , location: person.location }));
  }
}

class Employee{
  public name: string;
  public location: string;
  public headQuarter: HeadQuarter;

  constructor(name: string , location: string){
    this.name = name;
    this.location = location;
  }

  public register(headQuarter: HeadQuarter): void {
    this.headQuarter = headQuarter;
    headQuarter.register(this);
  }

  public getFriends(): Friend[]{
    return this.headQuarter.getEmployees(this);
  }
}

const company = new HeadQuarter();
const employee1 = new Employee('coskun','istanbul');
const employee2 = new Employee('x','new york');
const employee3 = new Employee('y','tokyo');

[employee1,employee2,employee3].forEach(employee => {
  employee.register(company);
})

console.log(employee1.getFriends())
