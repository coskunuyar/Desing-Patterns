class IteratorClass{
    constructor(data){
        this.index = 0;
        this.data = data;
    }

    [Symbol.iterator](){
        return {
            next: () => {
                if(this.index < this.data.length){
                    return { value: this.data[this.index++] , done: false};
                }else{
                    this.index = 0;
                    return {done: true};
                }
            }
        }
    }
}

function* iteratorUsingGenerator(collection){
    let nextIndex = 0;
    while(nextIndex <collection.length){
        yield collection[nextIndex++];
    }
}

const gen = iteratorUsingGenerator(['Hi', 'Hello', 'Bye']);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);