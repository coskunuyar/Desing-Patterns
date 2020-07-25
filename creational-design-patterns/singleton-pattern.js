class Mongoose{
    constructor(data){
        if(Mongoose.exists){
            return Mongoose.instance;
        }else{
            this._data = data;
            Mongoose.exists = true;
            Mongoose.instance = this;
            return Mongoose.instance;
        }
    }
    
    getData(){
        return this._data;
    }

    setData(data){
        this._data = data;
        return this._data;
    }
}

const dataBase = new Mongoose(["user 1","user 2","user 3"]);
const dataBase2 = new Mongoose(["userlesss"]);

console.log(dataBase.getData());
console.log(dataBase2.getData());