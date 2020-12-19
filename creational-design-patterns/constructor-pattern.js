// Creational Patters
// Constructor Pattern

// class Hero{
//   constructor(name , abilities){
//     this._name = name;
//     this._abilities = abilities;
//     this.getDetails = function(){
//       this._abilities.forEach(ability => {
//         console.log(`${this._name} can ${ability}`);
//       })
//     }
//   }
// }

function Hero(name , abilities){
  this._name = name;
  this._abilities = abilities;
  this.getDetails = function(){
    this._abilities.forEach(ability => {
      console.log(`${this._name} can ${ability}`)
    })
  }
}

const superman = new Hero('super',['fly','throw laser from eyes']);
superman.getDetails();
