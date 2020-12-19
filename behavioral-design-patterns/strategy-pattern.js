// Behaviroal Design Patterns
// Strategy patttern

class Commuter{
  play(player){
    return player.run();
  }
}

// Strategy 1
class Stoper{
  run(){
    return `Running 5 km/s`;
  }
}

// Strategy 2
class Forvet{
  run(){
    return `Running 12 km/s`;
  }
}

// Strategy 3
class GoalKeeper{
  run(){
    return `Running 1 km/s`;
  }
}

const commuter = new Commuter();
console.log(commuter.play(new Stoper()));
console.log(commuter.play(new Forvet()));
console.log(commuter.play(new GoalKeeper()));
