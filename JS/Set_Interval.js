const mySetInterval = (function(){
    let idCounter = 0;
    const timers = {}
    function mySetInterval(callback , delay){
        const id = ++idCounter;
        function run(){
            timers[id]=setTimeout(()=>{
                callback();
                run()
            },delay)
        }
        run();
        return id

    }
    function myClearInterval(id){
        if(timers[id]){
            clearTimeout(timers[id]);
            delete timers[id]
        }
    }
    return { mySetInterval,myClearInterval}
})()