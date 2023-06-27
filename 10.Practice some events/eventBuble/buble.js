document.getElementById("item-2").addEventListener('click',function(event){
    console.log("Item 2 clicked ");
    event.stopPropagation();
})
document.getElementById("list_ul").addEventListener("click",function () {
    console.log("Ul clicked");
})
document.getElementById("list-container").addEventListener('click',function(){
    console.log("List Container Clicked");
})
document.getElementById("body").addEventListener("click",function(){
    console.log("Body clicked");
})