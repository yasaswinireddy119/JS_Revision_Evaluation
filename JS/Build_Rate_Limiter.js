function createRateLimiter(limit,interval){
    let count=0
    setInterval(()=>{
        count = 0
    },interval)
    return function(){
        if(count<limit){
            count++;
            return "Call allowed"
        }
        else{
            return "Rate limit exceeded"
        }
    }
}