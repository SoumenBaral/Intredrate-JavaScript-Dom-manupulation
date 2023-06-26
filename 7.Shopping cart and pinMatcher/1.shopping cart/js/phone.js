

document.getElementById("plus-phn").addEventListener("click",function()
{
  const inputValue = value_plus("phn_quantity");
  const phonePriseString = document.getElementById("phn_prise");
  const newPrize = inputValue*1219;
  phonePriseString.innerText =newPrize;
  subtotal();
  tax();
  total();
   
})
document.getElementById("minus_phn").addEventListener("click",function(){
    const inputValue = value_minus("phn_quantity");
    const phonePriseString = document.getElementById("phn_prise");
    const phonePrise = parseInt(phonePriseString.innerText);
    console.log(phonePrise);
   if(phonePrise>0)
   {
    const newPrize =phonePrise - 1219;
    phonePriseString.innerText =newPrize;
   }
   subtotal();
   tax();
   total();

})

