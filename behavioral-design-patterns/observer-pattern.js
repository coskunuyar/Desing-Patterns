// Behaviroal Design Patterns
// Oberserver patttern

class Subject{
  constructor(subject){
    this.subject = subject;
    this.subscribers = [];
  }

  register(observer){
    this.subscribers.push(observer);
  }

  unregister(observer){
    this.subscribers = this.subscribers.filter(obs => obs !== observer);
  }

  fire(action){
    this.subscribers.forEach(observer => {
      observer.fire(action)
    })
  }
}

class Oberserver{
  fire(action){
    return `${action} is dispatched!`;
  }
}

const randomSubject = new Subject('random');
const observer1 = new Oberserver();
const observer2 = new Oberserver();
const observer3 = new Oberserver();

randomSubject.register(observer1);
randomSubject.register(observer2);
randomSubject.register(observer3);

randomSubject.fire('random action');
