document.getElementById("input-field").addEventListener("keyup",function(event){
    const txt = event.target.value;
    const txtUp = txt.toUpperCase();
    console.log(txtUp);
    const btn = document.getElementById("btn");
    if(txtUp=='DOM')
    {
        btn.removeAttribute('disabled');
    }
    else{
        btn.setAttribute("disabled",true);
    }
})
function getDiscount(){
    let original = document.getElementById('original_price');
    const originalPrice = parseFloat(original.innerText);
    const discount = 30/100;
    const discountedPrice = originalPrice -(originalPrice*discount);
   if(discountedPrice>100){
    original.innerText=discountedPrice.toFixed(2);
   }
   else{
    return 0;
   }

    
}