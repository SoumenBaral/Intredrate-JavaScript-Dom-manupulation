// ----------------------------------------------------------------------->>>>>>>
// 1. click korbo jaikhane addevent oikhane okk........
// 2. input thake amra value ta nia ascii.
// 3. we have to find where you want to add some money 
// 4. we can not add the value of innerText and value by the variable we have to give the variable.innerText and .value 


// document.getElementById("Deposit-btn").addEventListener('click',function(){
//     const newDepositInput = document.getElementById("newDeposit");
//     const newDepositTotal = parseFloat(newDepositInput.value);
//     const previousDeposit = document.getElementById("Deposit");
//     let previousDepositTotal = parseFloat(previousDeposit.innerText) ;
//     newDepositInput.value= '';
//     if (newDepositTotal>0) {
//         previousDepositTotal+=newDepositTotal;
//         previousDeposit.innerText=previousDepositTotal;
//     }
//     else{
//         alert("Add some money man khali nile hobe diteoo hobe!!!!")
//     }

//     //now we have to work with the balance section 

//     const previousBalance = document.getElementById("Balance");
//     let previousBalanceTotal = parseFloat(previousBalance.innerText);
//     if (newDepositTotal>0) {
//         previousBalanceTotal +=newDepositTotal;
//         previousBalance.innerText=previousBalanceTotal;
//     }
// })
//------------------little bit easy----------------------->

// Dry ........................>> Don't repeat Yourself;
 
document.getElementById("Deposit-btn").addEventListener("click",function(){
    const DepositInput =InputFieldTotal("newDeposit");
    const previousDeposit =GetElementValue("Deposit")
    
    if (DepositInput>0) {
        const newDeposit = previousDeposit +DepositInput;
        setElementInnerText("Deposit",newDeposit);
    }
    else{
        alert("Add some money man khali nile hobe diteoo hobe!!!!")
    }
    const Balance =GetElementValue("Balance")
    
    if (DepositInput>0) {
        const newBalance = DepositInput + Balance;
        setElementInnerText("Balance",newBalance);
    }
    
    console.log(previousDeposit);
    console.log(DepositInput);
})