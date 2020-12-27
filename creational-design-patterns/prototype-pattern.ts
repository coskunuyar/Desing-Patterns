// Creational Design Patterns
// Prototype Pattern

interface Plane{
  owner: string,
  numOfSeats: number;
  type: string;
  start: () => string;
  getDetails: () => string;
}

const plane: Plane = {
  owner: '',
  numOfSeats: 4,
  type: 'boeing',
  start(){
    return `Plane is started!`;
  },
  getDetails(){
    return `Owner: ${this.owner} \n NumOfSeats: ${this.numOfSeats} \n Type: ${this.type}`;
  }
}

const sample1 = Object.create(plane, { owner: { value: 'Coskun Uyar' }});
const sample2 = Object.create(plane, { owner: { value: 'Uyar Coskun' }});

console.log(sample1.getDetails());
console.log(sample2.getDetails());
