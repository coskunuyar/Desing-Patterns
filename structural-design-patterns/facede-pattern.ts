// Structural Design Patterns
// Facade pattern

class PublicComplaintManager{
    public register(type: string ,complaint: string): void{
      if(type === 'product'){
        const manager = new ProductComplaintManager();
        manager.register(complaint);
      }else if(type === 'service'){
        const manager = new ServiceComplaintManager();
        manager.register(complaint);
      }
    }

    public logs(): void{
      const manager1 = new ProductComplaintManager();
      manager1.logs();
      const manager2 = new ServiceComplaintManager();
      manager2.logs();
    }
}

interface Complaint{
  complaint: string;
  type: string;
  complexity?: boolean;
}

class ProductComplaintManager{
  private storage: Complaint[];
  static instance: ProductComplaintManager;
  
  constructor(){
    if(ProductComplaintManager.instance) return ProductComplaintManager.instance
    this.storage = []
    ProductComplaintManager.instance = this;
  }

  register(complaint: string){
    this.storage.push({ complaint , type: 'product' , complexity: true })
  }

  logs(){
    this.storage.forEach(log => {
      console.log(log.complaint);
    });
  }
}

class ServiceComplaintManager{
  static instance: ServiceComplaintManager;
  private storage: Complaint[];

  constructor(){
    if(ServiceComplaintManager.instance) return ServiceComplaintManager.instance
    this.storage = []
    ServiceComplaintManager.instance = this;
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

const complaintManager = new PublicComplaintManager;
complaintManager.register('product','What a shitty product!');
complaintManager.register('service','What a shitty service!');
complaintManager.logs();
