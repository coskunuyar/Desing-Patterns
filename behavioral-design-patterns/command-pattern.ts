// Behaviroal Design Patterns
// Command patttern

class Command{
  public commandsExecuted: string[]
  private obj: object

  constructor(obj: object){
    this.commandsExecuted = [];
    this.obj = obj;
  }

  public execute(command: string){
    this.commandsExecuted.push(command);
    return this.obj[command]();
  }
}

class OptimusPrime{
  private mode: 'Truck' | 'Robot';

  constructor(){
    this.mode = 'Truck';
  }

  public changeMode(): void{
    this.mode = this.mode === 'Robot' ? 'Truck' : 'Robot';
  }

  public shoot(): string{
    if(this.mode = 'Robot') return 'Shoot!';
    return 'Change Mode! :(';
  }

  public defend(): string{
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