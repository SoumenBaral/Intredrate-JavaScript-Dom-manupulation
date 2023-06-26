function generatePin(){
    const pin = Math.round(Math.random()*10000);
    return pin;
}
function getPin(){
    const pin = generatePin();
    const pinStr = pin + '';
    if(pinStr.length == 4)
    {
        return pin;
    }
    else{
        // console.log("It's Not 4 digit pin so call it again");
       return getPin();
    }

}
document.getElementById("btn_generate").addEventListener("click",function(){
    const Pin = getPin();
    const input = document.getElementById("input-field");
    input.value = Pin;
    // console.log(Pin);
})

// Get the value;
document.getElementById("calculator").addEventListener("click",function(event){
    const val = event.target.innerText;
    const display = document.getElementById("display_input");
    let display_Number = display.value;
    if(isNaN(val))
    {
        if(val=='C')
        {
            
            display.value ='';
        }
        if(val=="<"){
            const previousNumber = display_Number.split('');
            previousNumber.pop();
            const remainingDigit = previousNumber.join('');
            display.value = remainingDigit;
            // console.log(remainingDigit);
        }
    }
    else{
        
        display.value =display_Number + val;
    }

})
 function time_left(){
    let timeLeft =document.getElementById("time_left") ;
    timeLeftINT = parseInt(timeLeft.innerText)
    timeLeftINT =timeLeftINT-1;
   
    const submitBtn = document.getElementById("verify-pin");
    if (parseInt(timeLeft)>=0) {
        submitBtn.setAttribute('disabled',true);
    }
    else{
        submitBtn.removeAttribute('disabled');
        timeLeft.innerText =timeLeftINT;
    }
   
}
document.getElementById("verify-pin").addEventListener("click",function(){
   const display_pin = document.getElementById("input-field").value;
   const typed_pin = document.getElementById("display_input").value;

   //
   const Matched = document.getElementById("matched");
   const NOT_Matched = document.getElementById("Not_matched")
   if(display_pin==typed_pin)
   {
    Matched.style.display='block';
    NOT_Matched.style.display = 'none';
   }
   else
   {
   
    Matched.style.display='none';
    NOT_Matched.style.display = 'block';
   }

  time_left();
 
})