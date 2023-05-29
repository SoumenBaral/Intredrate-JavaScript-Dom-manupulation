document.getElementById("login-btn").addEventListener('click',function(){
   
    const email = document.getElementById("email_login").value;
    const pass =document.getElementById("password").value;
    console.log(email,pass);
    if (email=="soumen@gmail.com" && pass=="17060") {
        window.location.href="bank.html";
    }
    else{
        alert("You forget your Password I declare you as a waste!!!!")
    }
})