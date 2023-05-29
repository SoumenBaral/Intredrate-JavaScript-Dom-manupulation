//------------------->deposit Your money<......................

document.getElementById("Deposit-btn").addEventListener('click',function(){
    
    const deposit = document.getElementById('Deposit');
    const newDeposit = document.getElementById("newDeposit");
    let IntDeposit = parseInt(deposit.innerText);
    const IntNewDeposit = parseInt(newDeposit.value);
   if(IntNewDeposit>0){
    IntDeposit+=IntNewDeposit;
    deposit.innerText =IntDeposit;
   }
   else{
    window.alert("Please add some Money");
   }
   //total balance ...
   const balance=document.getElementById("Balance");
   let IntBalance = parseInt(balance.innerText);
   if (IntNewDeposit>0) {
    IntBalance +=IntNewDeposit;
    balance.innerText = IntBalance;
   }
   else{
    window.alert("Please add some Money");
   }

   newDeposit.value='';
    
})
//.....................>withdraw the money......................>


document.getElementById("Withdraw-btn").addEventListener('click',function(){
    
    const Withdraw = document.getElementById('Withdraw');//tale the value 

    const newWithdraw = document.getElementById("newWithraw");//input field

    let IntWithdraw = parseInt(Withdraw.innerText);
    const IntNewWithdraw = parseInt(newWithdraw.value);
    //balance
    const balance=document.getElementById("Balance");
    let IntBalance = parseInt(balance.innerText);
   if(IntBalance>=IntNewWithdraw){
    IntWithdraw+=IntNewWithdraw;
    Withdraw.innerText =IntWithdraw;
   }
   else if(IntNewWithdraw==NaN){
    window.alert("we don't need any lone ");
    
   }
   else{
    window.alert("Insufficient Money please Deposit some money");

   }
   //total balance ...
  
   
   if (IntBalance>=IntNewWithdraw) {
    IntBalance -=IntNewWithdraw;
    balance.innerText = IntBalance;
   }
   else if(IntNewWithdraw==NaN){
    window.alert("we don't need any lone ");
    
   }
   else{
    window.alert("Insufficient Money please Deposit some money");
   }

   newWithdraw.value='';
    
})