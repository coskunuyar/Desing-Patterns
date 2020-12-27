// Structural Design Patterns
// Composite pattern

class TreeNode{
  value: number;
  left: TreeNode;
  right: TreeNode;

  constructor(value: number){
    this.value = value;
    this.left = null;
    this.right = null;
  }

  public getType(): string{
    if(this.left || this.right) return 'Tree';
    return 'Leaf';
  }
}

class Tree{
  private root: TreeNode;
  constructor(){
    this.root = null;
  }

  public insert(value: number ): void{
    const newNode = new TreeNode(value);
    if(!this.root){
      this.root = newNode;
    }else{
      let current = this.root;
      while(true){
        if(value < current.value){
          if(current.left){
            current = current.left;
          }else{
            current.left = newNode;
            break;
          }
        }else if(value > current.value){
          if(current.right){
            current = current.right;
          }else{
            current.right = newNode;
            break;
          }
        }
      }
    }
  }

  public traverse(): void{
    if(!this.root) return;
    const queue = [this.root];
    const result = [];

    while(queue.length){
      const shiftedNode = queue.shift(); 
      result.push({ value: shiftedNode.value , type: shiftedNode.getType() })
      shiftedNode.left && queue.push(shiftedNode.left);
      shiftedNode.right && queue.push(shiftedNode.right);
    }

    result.forEach(item => {
      console.log(`value: ${item.value} , type: ${item.type}`);
    })
  }
}

const tree = new Tree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);
tree.traverse();
