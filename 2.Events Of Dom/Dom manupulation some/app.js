//vanish the text by using css into the js;
document.getElementById("van_button").addEventListener('click',function(){
    document.getElementById("van_text").style.display='none';
})

//change the text of vanish element
document.getElementById("cng_btn").addEventListener('click',function(){
    const display =  document.getElementById("van_text").style.display='none';
    if (display) {
        document.getElementById("van_text").style.display='block';
    }
    document.getElementById("van_text").innerText='Are you notice some thing man';
})

//update from Input field ...

document.getElementById("Update_button").addEventListener('click',function(){
    const display =  document.getElementById("up_text").style.display='none';
    if (display) {
        document.getElementById("up_text").style.display='block';
    }
    const InputField = document.getElementById("in_field");
    const updateField = document.getElementById("up_text");
    updateField.innerText= InputField.value;
    InputField.value ='';
})

//Get the value from textarea and update it into the parent ;

document.getElementById('cub').addEventListener('click',function(){
   const textField =  document.getElementById("textField");
   const p = document.createElement('p');
   p.innerText =textField.value;
   const parent = document.getElementById('addP');
   parent.appendChild(p);
   textField.value= '';

   console.log(textField.value);
})

// delete element by using the kyeUp event;
document.getElementById("delete_field").addEventListener('keyup',function(){
    const value = event.target.value;
    console.log(value);
    const btn = document.getElementById('delete_button')
    if (value=='delete') {
        btn.removeAttribute('disabled');
    }
    else{
        btn.setAttribute('disabled',true);
    }
})
document.getElementById("delete_button").addEventListener('click',function(){
    document.getElementById("up_text").style.display='none';
})