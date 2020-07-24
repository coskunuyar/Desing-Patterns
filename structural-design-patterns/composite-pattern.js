class Component{
    constructor(name){
        this._name = name;
    }
    
    getNodeName(){
        return this._name;
    }

    getType(){}

    addChild(component){}

    removeChildByName(componentName){}

    removeChildByIndex(index){}

    getChildByName(index){}

    getChildByIndex(index){}

    noOfChildren(){}

    static logTreeStructure(root){
        let treeStructure = '';
        function traverse(node , indent = 0){
            treeStructure += `$`
        }
    }
}