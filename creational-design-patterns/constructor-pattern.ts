// Creational Design Patterns
// Constructor Pattern

class Hero{
  private _name: string;
  private _abilities: string[];
  public getDetails: () => void;

  constructor(name: string , abilities: string[]){
    this._name = name;
    this._abilities = abilities;
    this.getDetails = function(){
      this._abilities.forEach((ability: string) => {
        console.log(`${this._name} can ${ability}.`);
      })
    }
  }
}

const superman = new Hero('Superman',['fly','throw laser from eyes']);
superman.getDetails();
