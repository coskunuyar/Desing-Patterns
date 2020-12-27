// Structural Design Patterns
// Flyweight pattern

class DataManager{
  private fileNameCache: string[];
  private fileCache: string[];

  constructor(){
    this.fileNameCache = [];
    this.fileCache = [];
  }

  public async heavyNetworkRequest(fileName: string) : Promise<any>{
    if(this.fileNameCache.includes(fileName)){
      return new Promise((resolve , reject) => {
        resolve(this.fileCache[this.fileNameCache.indexOf(fileName)])
      })
    }else{
      return new Promise((resolve , reject) => {
        setTimeout(() => {
          const randomData = `${Date.now()} ${Math.random()}`
          this.fileNameCache.push(fileName);
          this.fileCache.push(randomData);
          resolve(randomData);
        },2000);
      })
    }
  }
}

const manager = new DataManager();
manager.heavyNetworkRequest('example1.text').then((data) => {
  console.log(data);
})
manager.heavyNetworkRequest('example1.text').then((data) => {
  console.log(data);
})
