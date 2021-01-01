// Behavioral Design Patterns
// Command Pattern

class Command{
  public commandsExecuted: string[];
  private obj: Object;

  constructor(obj: object){
    this.commandsExecuted = [];
    this.obj = obj;;
  }

  public execute(command: string): any{
    this.commandsExecuted.push(command);
    return this.obj[command]();
  }
}

class OptimusPrime{
  private mode: 'Truck' | 'Robot';
  private active: boolean;

  constructor(){
    this.mode = 'Truck';
    this.active = false;
  }

  public changeMode(): void{
    this.mode = this.mode === 'Robot' ? 'Truck':'Robot';
    this.active = this.mode === 'Robot'
  }

  public shoot(): string{
    if(this.active) return 'Shoot!';
    return 'Change Mode! :(';
  }

  public defend(): string{
    if(this.active) return 'Defend!';
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
