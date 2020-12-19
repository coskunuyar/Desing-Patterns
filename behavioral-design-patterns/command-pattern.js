// Behaviroal Design Patterns
// Command patttern

class Command{
  constructor(obj){
    this.commandsExecuted = [];
    this.obj = obj;
  }

  execute(command){
    this.commandsExecuted.push(command);
    return this.obj[command]();
  }
}

class OptimusPrime{
  constructor(){
    this.mode = 'Truck'
  }

  changeMode(){
    this.mode = this.mode === 'Robot' ? 'Truck' : 'Robot';
  }

  shoot(){
    if(this.mode = 'Robot') return 'Shot!';
    return 'Change Mode! :(';
  }

  defend(){
    if(this.mode = 'Robot') return 'Defend!';
    return 'Change Mode! :(';
  }
}

const commander = new Command(new OptimusPrime());

commander.execute('changeMode');
console.log(commander.execute('shoot'));
console.log(commander.execute('shoot'));
console.log(commander.execute('shoot'));
console.log(commander.execute('defend'));

console.log(commander.commandsExecuted);
