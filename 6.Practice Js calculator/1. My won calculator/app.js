console.log("CONNECTED");
function fun(num)
{
    document.getElementById("display_Box").value += num;
    // console.log(num);
}
document.getElementById("btn").addEventListener('click',function(){
    document.getElementById("display_Box").value="";
    console.log("clicked");
})
function result(){
    let p = document.getElementById("display_Box").value;
    let q = eval(p);
    document.getElementById("display_Box").value=q;
    console.log("clicked");
}