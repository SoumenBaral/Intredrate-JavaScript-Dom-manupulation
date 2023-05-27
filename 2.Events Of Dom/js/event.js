//Option 1 is directly use on html tag..

// console.log("ami akta Special Event thake Bolcii ");//for test purpose 
//Option 2 : get OneClick Function;
function makeRed(){
    document.body.style.backgroundColor= 'red';
}
//Option 3 : getElementById 

const make_blue = document.getElementById("make_blue");
make_blue.onclick=Blue_button;

function Blue_button(){
    document.body.style.backgroundColor= 'blue';
}
//Another Option 3;

const makePurple = document.getElementById("make_purple");
makePurple.onclick = function (){
    document.body.style.backgroundColor='purple';
}

// Option 4

const makePink = document.getElementById("make-pint");
makePink.addEventListener('click',function(){
    document.body.style.backgroundColor='pink';
})
// Option 4 final Match mostly we use it....

document.getElementById('make_green').addEventListener('click',function(){
    document.body.style.backgroundColor='green';
})