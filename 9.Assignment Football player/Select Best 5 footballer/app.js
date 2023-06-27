let count = 0;
function addPlayer(player,btn){
    count = count+1;
   if(count>5)
   {
    alert("You can Not Add more Player your vacancy is Full");
   }
   else
   {
    const players = document.getElementById(player);
    const button =document.getElementById(btn); 
    button.style.backgroundColor = 'gray';
    const getParent = document.getElementById("add_players");
    const createLi = document.createElement("li")
    const play = count +'. '+players.innerText;
    createLi.innerText =  play;
    createLi.classList.add('my-4')
    getParent.appendChild(createLi)
    button.disabled = true;

    
   }
}
function PlayerCost(){
    const PlayerPrice = document.getElementById("PlayerPrice");
    return PlayerPrice;
}
document.getElementById("PlayerExpenses").addEventListener('click',function(){
    const PlayerCosts = document.getElementById("PlayerCost");
    const PlayerPrice = PlayerCost();
    const PlayerCostInt = parseInt(PlayerCosts.value);
    const newPrice = PlayerCostInt*count;
    PlayerPrice.innerText = newPrice;
    // console.log(PlayerPrice.innerText);
})
document.getElementById("totalExp").addEventListener('click',function(){
    const PlayerPrice = PlayerCost();
    const PlayerPriceINT = parseInt(PlayerPrice.innerText);
    const ManagerCost = parseInt(document.getElementById("Manager").value);
    const CoachCost = parseInt(document.getElementById("Coach").value)
    const totalExpanse = PlayerPriceINT + ManagerCost + CoachCost;
    const Total = document.getElementById("TotalEXP");
    Total.innerText = totalExpanse;
    
    // console.log(PlayerPriceINT ,ManagerCost,CoachCost);
})