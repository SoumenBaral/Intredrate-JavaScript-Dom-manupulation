// document.getElementById("Withdraw-btn").addEventListener('click',function(){
//     const newWithdrawInput = document.getElementById("newWithdraw");
//     const newWithdrawTotal = parseFloat(newWithdrawInput.value);
//     const previousWithdraw = document.getElementById("Withdraw");
//     let previousWithdrawTotal = parseFloat(previousWithdraw.innerText) ;
//     newWithdrawInput.value= '';
//     if (newWithdrawTotal>0) {
//         previousWithdrawTotal+=newWithdrawTotal;
//         previousWithdraw.innerText=previousWithdrawTotal;
//     }
//     else{
//         alert("Add some money man khali nile hobe diteoo hobe!!!!")
//     }

//     //now we have to work with the balance section 

//     const previousBalance = document.getElementById("Balance");
//     let previousBalanceTotal = parseFloat(previousBalance.innerText);
//     if (newWithdrawTotal>0) {
//         previousBalanceTotal +=newWithdrawTotal;
//         previousBalance.innerText=previousBalanceTotal;
//     }
// })
document.getElementById("Withdraw-btn").addEventListener("click",function(){
    const WithdrawInput =InputFieldTotal("newWithdraw");
    const previousWithdraw =GetElementValue("Withdraw")
    const Balance =GetElementValue("Balance")
    if (WithdrawInput>0 && Balance>=WithdrawInput) {
        const newWithdraw = previousWithdraw +WithdrawInput;
        setElementInnerText("Withdraw",newWithdraw);
    }
    else{
        alert("Insufficient Balance !!!!")
    }
  
    
    if (WithdrawInput>0 && Balance>=WithdrawInput) {
        const newBalance =Balance- WithdrawInput;
        setElementInnerText("Balance",newBalance);
    }
    
    console.log(previousWithdraw);
    console.log(WithdrawInput);
})