// Creational Design Patterns
// Prototype Pattern

const car = {
  numOfSeats: 4,
  type: 'sedan',
  start(){
    return `Card is started!`;
  },
  getDetails(){
    return `owner: ${this.owner} \n numOfSeats: ${this.numOfSeats} \n type: ${this.type}`;
  }
}

const vehicle1 = Object.create(car, { owner: { value: 'Coskun Uyar' }});
const vehicle2 = Object.create(car, { owner: { value: 'Uyar Coskun' }});

console.log(vehicle1.getDetails());
console.log(vehicle2.getDetails());
