//hold variables

let links = document.querySelector(".list")
let userInfo=document.querySelector("#user_info")
let userDom=document.querySelector("#user_name")
let logOut=document.querySelector("#logout")

let nameUser=localStorage.getItem("username");


links.remove();
userInfo.style.display="flex";
userDom.innerHTML=nameUser;

logOut.addEventListener("click", function()
{
    localStorage.clear();
    setTimeout(function(){
        window.location="register.html"
    }, 1500)
})