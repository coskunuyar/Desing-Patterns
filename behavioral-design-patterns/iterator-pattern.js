// Behaviroal Design Patterns
// Iterator patttern

class ICanItareMyData{
  constructor(data){
    this._data = data;
  }

  [Symbol.iterator](){
    let count = 0;
    return {
      next: () => {
        if(count < this._data.length){
          return { value: this._data[count++] , done: false };
        }else{
          return { done: true }
        }
      }
    }
  }
}

const store = new ICanItareMyData([1,2,3,4,5]);
for(let item of store){
  console.log(item);
}
