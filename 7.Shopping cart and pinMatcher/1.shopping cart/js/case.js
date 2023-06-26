document.getElementById("case_plus").addEventListener("click",function()
{
  const inputValue = value_plus("case_input");
  const casePriseString = document.getElementById("case_prise");
  const newPrize = inputValue*59;
  casePriseString.innerText =newPrize;
  subtotal();
  tax();
  total();
})
document.getElementById("case_minus").addEventListener("click",function(){
    value_minus("case_input")
    const casePriseString = document.getElementById("case_prise");
    const casePrise = parseInt(casePriseString.innerText);
   
   if(casePrise>0)
   {
    const newPrize =casePrise - 59;
    casePriseString.innerText =newPrize;
   }
   subtotal();
   tax();
   total();
})