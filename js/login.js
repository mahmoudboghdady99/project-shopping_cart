// hold variables

let username=document.getElementById("username")
let passward=document.getElementById("passward")

let loginBtn=document.getElementById("loginBtn")

let getUser=localStorage.getItem("username")
let getPass=localStorage.getItem("passward")

//events
loginBtn.addEventListener("click", loginL)
// loginBtn.addEventListener("click", function(e){
//     e.preventDefault();
//     if(username.value === "" || passward.value === "")
//     {
//         alert("please fill data")
//     }else{
//         if( (getUser && getUser.trim() === username.value.trim())
//          && (getPassward && passward.value.trim() === passward.value.trim()))
//         {
//             setTimeout(function(){
//             window.location = "index.html"
//         }, 1500)        
// }else{
//             console.log("wrong")
//         }
//     }
// })
function loginL(e)
{
    e.preventDefault();
    if(username.value==="" || passward.value==="")
    {
        alert("fill data")
    }else{
        if(
        (getUser && getUser.trim()===username.value.trim()) && 
        (getPass && getPass.trim()===passward.value.trim())
            ){
                setTimeout(function(){
                    window.location="home.html"
                }, 1500)
            }else{
                console.log("wrong")
            }
    
};

}