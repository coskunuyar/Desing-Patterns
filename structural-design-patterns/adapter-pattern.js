class OldManupulator{
    constructor(data){
        this._data = data;
    }

    operator(type,index){
        if(type === "delete"){
            this._data = this._data.filter(item => item.index !== index);
        }else if(type === "update"){
            this._data.forEach(item => {
                if(item.index === index){
                    item.isUpdated = true;                
                }
            });
        }
    }
}

class NewManupulator{
    constructor(data){
        this._data = data;
    }

    delete(index){
        this._data = this._data.filter(item => item.index !== index);
    }

    update(index){
        this._data.forEach(item => {
            if(item.index === index){
                item.isUpdated = true;                
            }
        });
    }
}

const initialData = [
    {index: 0 , isUpdated: false},
    {index: 1 , isUpdated: false}
];

let oldM = new OldManupulator(initialData);
oldM.operator("delete",0);
oldM.operator("update",1);
console.log(oldM._data);

let newM = new NewManupulator(initialData);
newM.delete(0);
newM.update(1);
console.log(newM._data);

class AdaptorManupulator{
    constructor(data){
        this._data = data;
    }

    operator(type,index){
        let newOperator = new NewManupulator(this._data);
        if(type === "delete"){
            newOperator.delete(index);
        }else if(type === "update"){
            newOperator.update(index);
        }
        this._data = newOperator._data;
    }
}

let adopterM = new AdaptorManupulator(initialData);
adopterM.operator("delete",0);
adopterM.operator("update",1);
console.log(adopterM._data);