class Database{
    constructor(data){
        if(Database.exists){
            return Database.instance;
        }
        this._data = data;
        Database.instance = this;
        Database.exists = true;
        return this;
    }

    getData(){
        return this._data;
    }

    setData(data){
        this._data = data;
    }
}

const users = new Database(['user1','user2','user3']);
console.log(users);

const newUserList = new Database(['userx','usery','userz']);
console.log(newUserList);