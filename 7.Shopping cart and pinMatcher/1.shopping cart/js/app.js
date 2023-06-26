function value_plus(inputID)
{
    const inputData = document.getElementById(inputID);
    let NumberTypeData = parseInt(inputData.value);
    inputData.value = NumberTypeData+=1;
    return NumberTypeData;
}
function value_minus(inputID)
{
    const inputData = document.getElementById(inputID);
    let NumberTypeData = parseInt(inputData.value);
    if(NumberTypeData>0)
    {
        NumberTypeData -=1;
        inputData.value =NumberTypeData;
    }
    return NumberTypeData;
}
function subtotal(){
    const phonePriseString = document.getElementById("phn_prise");
    const phonePrise = parseInt(phonePriseString.innerText);
    const casePriseString = document.getElementById("case_prise");
    const casePrise = parseInt(casePriseString.innerText);
    const newTotal = phonePrise+casePrise;
    document.getElementById("Subtotal").innerText = newTotal;
    return newTotal;
}
function tax(){
    const newTotal = subtotal();
    const tax = (newTotal *(5/100)).toFixed(2);
    document.getElementById("tax").innerText = tax;
    return tax;

}
function total(){
    const newTotal = subtotal();
    const taxx =tax();
    console.log(newTotal);
    console.log(taxx);
    const total = newTotal+parseFloat(taxx);
    document.getElementById("Total").innerText = total;
}