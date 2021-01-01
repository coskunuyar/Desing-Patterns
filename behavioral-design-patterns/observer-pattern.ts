// Behavioral Design Patterns
// Observer Pattern

class Subject{
  private subscribers: Subscriber[];
  private subject: string;

  constructor(subject: string){
    this.subject = subject;
    this.subscribers = [];
  }

  public register(subscriber: Subscriber): void{
    this.subscribers.push(subscriber);
  }

  public unregister(subscriber: Subscriber): void{
    this.subscribers = this.subscribers.filter(sbs => sbs !== subscriber);
  }

  public fire(action: string): void{
    this.subscribers.forEach(observer => observer.fire(action));
  }
}

class Subscriber{
  public fire(action: string): string{
    return `${action} is dispatched!`;
  }
}

const randomSubject = new Subject('random');
const observer1 = new Subscriber();
const observer2 = new Subscriber();
const observer3 = new Subscriber();

randomSubject.register(observer1);
randomSubject.register(observer2);
randomSubject.register(observer3);

randomSubject.fire('random action');
