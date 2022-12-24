//hold variables

let username = document.getElementById("username")
let email = document.getElementById("email")
let passward = document.getElementById("passward")

let registerBtn = document.getElementById("signUp")

//events
registerBtn.addEventListener("click", register)

function register(e)
{
    e.preventDefault();
    if(username.value==="" || email.value==="" || passward.value==="")
    {
        alert("please fill data")
    }else{
        localStorage.setItem("username", username.value)
        localStorage.setItem("email", email.value)
        localStorage.setItem("passward", passward.value)
    }
    setTimeout(function(){
        window.location="login.html";
    }, 2000)
}



