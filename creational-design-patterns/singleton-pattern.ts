// Creational Design Patterns
// Singleton Pattern

class Database{
  private _data: any[];
  static instance: Database;
  
  constructor(data: any[]){
    if(Database.instance) return Database.instance;
    this._data = data;
    Database.instance = this;
  }

  public getData(): any[]{
    return this._data;
  }

  public setData(data: any[]): any[]{
    this._data = data;
    return this._data;
  }
}

const database1 = new Database([1,2,3,4]);
const database2 = new Database([5,6,7,8,Math.random()]);

console.log(database1 === database2);
