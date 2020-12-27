// Behaviroal Design Patterns
// Iterator patttern

interface IteratorStep{ 
  next: () => { value?: any , done: boolean} 
}

class ICanItareMyData{
  private _data: any[];

  constructor(data: any[]){
    this._data = data;
  }

  public [Symbol.iterator](): IteratorStep {
    let count = 0;
    return {
      next: () => {
        if(count < this._data.length){
          return { value: this._data[count++] , done: false };
        }else{
          return { done: true };
        }
      }
    }
  }
}

const store = new ICanItareMyData([1,2,3,4,5]);
for(let item of store){
  console.log(item);
}