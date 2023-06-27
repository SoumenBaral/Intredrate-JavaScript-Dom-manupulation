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

    console.log(play);
   }
}