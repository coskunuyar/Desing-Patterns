// Behavioral Design Patterns
// Strategy Pattern

interface Player{
  run: () => string;
}

class Commuter{
  public play(player: Player): string{
    return player.run();
  }
}

// Strategy 1
class Stoper implements Player{
  public run(): string{
    return 'Running 5 km/s';
  }
}

// Strategy 2
class Forvet implements Player{
  public run(): string{
    return `Running 12 km/s`;
  }
}

// Strategy 3
class GoalKeeper implements Player{
  public run(): string{
    return `Running 1 km/s`;
  }
}

const commuter = new Commuter();
console.log(commuter.play(new Stoper()));
console.log(commuter.play(new Forvet()));
console.log(commuter.play(new GoalKeeper()));
