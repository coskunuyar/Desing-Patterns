// Structural Design Patterns
// Facade pattern

class PublicComplaintManager{
  productManager: ProductComplaintManager;
  serviceManager: ServiceComplaintManager;

  constructor(){
    this.productManager = new ProductComplaintManager();
    this.serviceManager = new ServiceComplaintManager();
  }
  
  public register(type: string ,complaint: string): void{
    if(type === 'product'){
      this.productManager.register(complaint);
    }else{
      this.serviceManager.register(complaint);
    }
  }

  public logs():void{
    this.productManager.logs();
    this.serviceManager.logs();
  }
}

interface Complaint{
  complaint: string;
  type: string;
  complexity?: boolean;
}

class ProductComplaintManager{
  private storage: Complaint[];
  static instace: ProductComplaintManager;

  constructor(){
    if(ProductComplaintManager.instace) return ProductComplaintManager.instace;
    this.storage = [];
    ProductComplaintManager.instace = this;
  }

  register(complaint: string): void{
    this.storage.push({ complaint , type: 'product' , complexity: true });
  }

  logs(): void{
    this.storage.forEach(log => {
      console.log(log.complaint);
    })
  }
}

class ServiceComplaintManager{
  private storage: Complaint[];
  static instance: ServiceComplaintManager;

  constructor(){
    if(ServiceComplaintManager.instance) return ServiceComplaintManager.instance;
    this.storage = [];
    ServiceComplaintManager.instance = this;
  }

  register(complaint: string): void{
    this.storage.push({ complaint , type: 'product' });
  }

  logs(): void{
    this.storage.forEach(log => {
      console.log(log.complaint);
    })
  }
}


const complaintManager = new PublicComplaintManager;
complaintManager.register('product','What a shitty product!');
complaintManager.register('service','What a shitty service!');
complaintManager.logs();
