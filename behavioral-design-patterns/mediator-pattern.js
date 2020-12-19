// Behaviroal Design Patterns
// Mediator patttern

class HeadQuarter{
  constructor(){
    this.employees = [];
  }

  register(employee){
    this.employees.push(employee);
  }

  getEmployees(employee){
    return this.employees.filter(person => person !== employee)
                         .map(person => ({ name: person.name , location: person.location}));
  }
}

class Employee{
  constructor(name,location){
    this.name = name;
    this.location = location;
    this.headQuarter = null;
  }

  register(headQuarter){
    this.headQuarter = headQuarter;
    headQuarter.register(this);
  }

  getFriends(){
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
