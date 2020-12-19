// Structural Design Patterns
// Proxy pattern

const cache = [];
function heavyNetworkRequest(fileName){
  cache.push(fileName);
  return `Data of ${fileName}-from request!`;
}

const proxiedHeavyNetworkRequest = new Proxy(heavyNetworkRequest,{
  apply: function(target , thisArgs , args){
    const fileName = args[0];
    if(cache.includes(fileName)){
      return `Data of ${fileName}-from cache!`
    }else{
      return Reflect.apply(target , thisArgs , args);
    }
  }
})

console.log(proxiedHeavyNetworkRequest('dogpic.jpg'))
console.log(proxiedHeavyNetworkRequest('dogpic.jpg'))
