document.getElementById("calculate-btn").addEventListener("click",function(){
    const income = document.getElementById("income");

    //Expense 

    const food = document.getElementById("food");
    const rent = document.getElementById("rent");
    const clothes = document.getElementById("clothes");
    const total_exp = document.getElementById("total-expense");
    const NewTotal_expense = parseFloat(food.value)+parseFloat(rent.value)+parseFloat(clothes.value);
    const balance = document.getElementById("balance");
    const newBalance = parseFloat(income.value)-NewTotal_expense;
    if(isNaN(income.value)||isNaN(food.value)||isNaN(rent.value)|| isNaN(clothes.value))
    {
        alert("please add  some actual Money");

    }
    else{
       
       if(parseFloat(income.value)>=NewTotal_expense)
       {
        total_exp.innerText = NewTotal_expense;
        balance.innerText = newBalance;
       }
       else
       {
        alert("I can't expend over your income Man Please reduce some of your expanse");
       }
    }
    
}
)
function calculateSavings(){
    const saved_present = document.getElementById("save");
    const balance = document.getElementById("balance");
    const saving_amount = document.getElementById("saving-amount");
    const newSaving_amount = parseFloat(balance.innerText) * (parseFloat(saved_present.value)/100);
    const remaining = document.getElementById("remaining-balance");
    const newRemaining =  parseFloat(balance.innerText) -newSaving_amount;
    if(parseInt(saved_present.value)<101 && isNaN(saved_present.value)==false && isNaN(balance.innerText)==false){
        saving_amount.innerText = newSaving_amount.toFixed(2);
        remaining.innerText = newRemaining.toFixed(2);
    }
    else
    {
        alert("you can Not take more then 100% as saved money");
    }
    
}