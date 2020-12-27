// Behaviroal Design Patterns
// Strategy patttern

class Commuter{
  public play(player: Stoper | Forvet | GoalKeeper ): string{
    return player.run();
  }
}

// Strategy 1
class Stoper{
  public run(): string{
    return `Running 5 km/s`;
  }
}

// Strategy 2
class Forvet{
  public run(): string{
    return `Running 12 km/s`;
  }
}

// Strategy 3
class GoalKeeper{
  public run(): string{
    return `Running 1 km/s`;
  }
}

const commuter = new Commuter();
console.log(commuter.play(new Stoper()));
console.log(commuter.play(new Forvet()));
console.log(commuter.play(new GoalKeeper()));
