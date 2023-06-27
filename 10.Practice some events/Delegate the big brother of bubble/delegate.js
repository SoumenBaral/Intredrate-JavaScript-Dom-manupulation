// const items =document.getElementsByClassName("list");
// for (const item of items) {
//     item.addEventListener('click',function(event){
//         event.target.parentNode.removeChild(event.target);
//     })  
// }
document.getElementById('li-container').addEventListener("click",function(event){
    console.log(event.target);
    event.target.parentNode.removeChild(event.target)
})
document.getElementById("add-item").addEventListener('click',function(){
    const listContainer =document.getElementById('li-container')
    const li = document.createElement('li');
    li.classList.add('list');
    li.innerText='Brand New Item Added';
    listContainer.appendChild(li);
})