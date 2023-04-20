(function (){
    let display=document.querySelector(".display");
    let buttons=document.querySelectorAll(".btn")
    let clear=document.querySelector(".btn-clear");

    let equal=document.querySelector(".btn-equal");

    buttons.forEach(function(button){
        button.addEventListener("click", function(event){
            let value=event.target.dataset.num;
            display.value+=value;
        })
       
        
    });
    equal.addEventListener("click", function(event){

        if(display.value ===''){
            return (display.value="Please enter");
       }

       
           let answer= eval(display.value)
           display.value=answer;
       
   })
    

    clear.addEventListener("click", function(event){
        display.value="";
    });
    
    
})();