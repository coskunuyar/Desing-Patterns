// Behaviroal Design Patterns
// State patttern

class TrafficLights{
  states: Light[];
  currentIndex: number;

  constructor(){
    this.states = [
      new Light('green','Go!'), 
      new Light('yellow' , 'Wait!'), 
      new Light('red','Stop!')
    ]
    this.currentIndex = 0;
  }

  public changeState(): void{
    if(this.currentIndex + 1 > this.states.length-1){
      this.currentIndex = 0
    }else{
      this.currentIndex++;
    }
  }

  public showSign(): string{
    return this.states[this.currentIndex].sign();
  }
}

class Light{
  private _type: 'green' | 'yellow' | 'red';
  private _message: string;

  constructor(type: 'green' | 'yellow' | 'red' , message: string){
    this._type = type;
    this._message = message;
  }

  public sign(): string{
    return this._message;
  }
}

const trafficLights = new TrafficLights();

console.log(trafficLights.showSign());
trafficLights.changeState();

console.log(trafficLights.showSign());
trafficLights.changeState();

console.log(trafficLights.showSign());
trafficLights.changeState();

console.log(trafficLights.showSign());
trafficLights.changeState();
