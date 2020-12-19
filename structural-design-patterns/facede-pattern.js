// Structural Design Patterns
// Facade pattern

class PublicComplaintManager{
    register(type,complaint){
      const id = Math.random().toString().replace('0.','');
      if(type === 'product'){
        const manager = new ProductComplaintManager();
        manager.register(complaint,id);
      }else if(type === 'service'){
        const manager = new ServiceComplaintManager();
        manager.register(complaint,id);
      }
    }

    logs(){
      const manager1 = new ProductComplaintManager();
      manager1.logs();
      const manager2 = new ServiceComplaintManager();
      manager2.logs();
    }
}

class ProductComplaintManager{
  constructor(){
    if(ProductComplaintManager.instace) return ProductComplaintManager.instace
    this.storage = []
    ProductComplaintManager.instace = this;
  }

  register(complaint){
    this.storage.push({ complaint , type: 'product' , complexity: true })
  }

  logs(){
    this.storage.forEach(log => {
      console.log(log.complaint);
    });
  }
}

class ServiceComplaintManager{
  constructor(){
    if(ServiceComplaintManager.instace) return ServiceComplaintManager.instace
    this.storage = []
    ServiceComplaintManager.instace = this;
  }

  register(complaint){
    this.storage.push({ complaint , type: 'product' })
  }

  logs(){
    this.storage.forEach(log => {
      console.log(log.complaint);
    });
  }
}

const manager = new PublicComplaintManager;
manager.register('product','What a shitty product!');
manager.register('service','What a shitty service!');
manager.logs();
