// Behaviroal Design Patterns
// State patttern

class TrafficLights{
  constructor(){
    this.states = [
      new Light('green','Go!'), 
      new Light('yellow' , 'Wait!'), 
      new Light('red','Stop!')
    ]
    this.currentIndex = 0;
  }

  changeState(){
    if(this.currentIndex + 1 > this.states.length-1){
      this.currentIndex = 0
    }else{
      this.currentIndex++;
    }
  }

  showSign(){
    return this.states[this.currentIndex].sign();
  }
}

class Light{
  constructor(type,message){
    this._type = type;
    this._message = message;
  }

  sign(){
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
