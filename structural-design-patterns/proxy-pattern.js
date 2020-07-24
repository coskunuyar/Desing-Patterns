function networkFetch(url){
    return `${url} - Response from network`;
}

const cache = [];
const proxiedNetworkFetch = new Proxy(networkFetch,{
    apply(target,thisArgs,args){
        const urlParam = args[0];
        if(cache.includes(urlParam)){
            return `${urlParam} - Response from cache`;
        }else{
            cache.push(urlParam);
            return Reflect.apply(target,thisArgs,args);
        }
    }
});

console.log(proxiedNetworkFetch('dogPic.jpg'));
console.log(proxiedNetworkFetch('dogPic.jpg'));